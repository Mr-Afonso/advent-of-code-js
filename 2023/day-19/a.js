const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")

// console.log(cleanInput)

let workflow = []
let parts = []

let isPart = false

cleanInput.forEach((element) => {

  if (element === "") {
    isPart = true
  }

  if (!isPart) {

    let sanitizeConditions
    sanitizeConditions = element.split("{")[1].split("}")[0].split(",").map((el) => {

      let code = ""
      let comparation = ""
      let value = ""
      if (el.split('>').length > 1) {
        code = el.split('>')[0]
        comparation = ">"
        value = el.split('>')[1]
      }

      if (el.split('<').length > 1) {
        code = el.split('<')[0]
        comparation = "<"
        value = el.split('<')[1]
      }

      return {
        code: code === "" ? el : code,
        comparation: comparation,
        value: value.split(":")[0],
        result: el.split(":")[1]
      }
    })
    workflow.push({
      part: element.split("{")[0],
      conditions: sanitizeConditions
    })
  } else {
    if (element !== "") {
      parts.push(element)
    }
  }
})

// If a part is sent to another workflow, it immediately switches to the start of that workflow instead and never returns
// If a part is accepted (sent to A) or rejected (sent to R), the part immediately stops any further processing.

// All parts begin in the workflow named in

let acceptedParts = []

const handleWorkflow = (code, part) => {

  if (code === "A") {
    return "A"
  }

  if (code === "R") {

    return "R"
  }

  const flow = workflow.filter((element) => {
    return element.part === code
  })[0]

  for (let index = 0; index < flow.conditions.length; index++) {
    const element = flow.conditions[index]

    const partResult = part.filter((el) => {
      return el.code === element.code
    })[0]

    if (element.comparation === ">") {

      if (Number(partResult.value) > Number(element.value)) {
        if (element.result === "A" || element.result === "R") {
          return handleWorkflow(element.result, part)
        } else {
          index = flow.conditions.length
          return handleWorkflow(element.result, part)
        }
      } else {
        if (flow.conditions[index + 1].code === "A" || flow.conditions[index + 1].code === "R") {
          return handleWorkflow(flow.conditions[index + 1].code, part)
        }
      }
    }

    if (element.comparation === "<") {
      if (Number(partResult.value) < Number(element.value)) {
        if (element.result === "A" || element.result === "R") {
          return handleWorkflow(element.result, part)
        } else {
          index = flow.conditions.length
          return handleWorkflow(element.result, part)
        }
      } else {

        if (flow.conditions[index + 1].code === "A" || flow.conditions[index + 1].code === "R") {
          return handleWorkflow(flow.conditions[index + 1].code, part)
        }
      }
    }

    if (element.comparation === "") {
      if (element.code === "A" || element.code === "R") {
        return handleWorkflow(element.code, part)
      } else {
        index = flow.conditions.length
        return handleWorkflow(element.code, part)
      }
    }
  }
}

// check is this part is accepted
const isAccepted = (part) => {
  // example: part
  // [
  //   { code: 'x', value: '787' }, 
  //   { code: 'm', value: '2655' },
  //   { code: 'a', value: '1222' },
  //   { code: 's', value: '2876' } 
  // ]

  // ex: workflow
  // { part: 'px', conditions: [
  //   { code: 'a', comparation: '>', value: 'a>3333', result: 'R' },
  //   { code: 'R', comparation: '', value: 'R', result: undefined }
  // ] },

  let finalResult = handleWorkflow("in", part)
  if (finalResult === "R") {
    return false
  } else {
    return true
  }

}

parts.forEach((element) => {

  let sanitizePart = element.replace("{", "").replace("}", "").split(",").map((e) => {
    return {
      code: e.split("=")[0],
      value: e.split("=")[1]
    }
  })

  let conclusion = isAccepted(sanitizePart)
  if (conclusion) {

    // example {x=787,m=2655,a=1222,s=2876}
    acceptedParts.push(element)
  }

})

let sum = 0

acceptedParts.forEach((element) => {

  // example {x=787,m=2655,a=1222,s=2876}
  sum += element.replace(/\D/g, '-').split("-").filter((e) => { return e !== "" }).reduce((a, b) => { return Number(a) + Number(b) })

})

console.log("total: ", sum)