
export const getPath = (arr, query) => {
  let newArr = {...arr};
  for (const [k, v] of Object.entries(newArr)) {

    for (const [ky, vl] of Object.entries(v)) {

      if (typeof(vl) === "object" && vl !== null) {
        for (const [key, val] of Object.entries(vl)) {

          if (val === query) 
          return {type: "RESULT", payload: `a.${k}.${ky}.${key}`};
        }
      } else {
          if (vl === Number(query))
            return {type: "RESULT", payload: `a.${k}.${ky}`};
        }
    }   
  }
  return {type: "ERROR", payload: "NOT FOUND"};
}