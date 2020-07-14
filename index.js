async function main(element) {
  const thanksText = "Thank you all for your participation";
  const thanks = element.querySelector(".thanks");
  const names = element.querySelector(".names");

  try {
    const response = await fetch("names.yml");
    const data = jsyaml.safeLoad(await response.text());

    if (!data || !data.names) {
      throw new Error("Names array is empty or does not exist");
    }

    thanks.innerText = `${thanksText}:`;
    names.innerText = data.names.join(", ");
  } catch (error) {
    console.error("Oops!", error);
    thanks.innerText = `${thanksText}!`;
  }
}

main(document);
