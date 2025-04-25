const BASE_URL =
  "https://nicolascasmuz-portfolio-fis2y5au9-nicolascasmuzs-projects.vercel.app/api";

export async function fetchAPI(input?: RequestInfo, options?) {
  const url = BASE_URL + input;
  let res;

  const response = await fetch(url, options);
  res = response;

  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    console.log("data api: ", data);
    return data;
  } else {
    throw new Error(`Hubo un error ${res.status}: ${res.statusText}`);
  }
}

export async function sendMail(mail) {
  if (mail) {
    const sentMail = fetchAPI("/send-mail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mail),
    });
    return sentMail;
  }
}
