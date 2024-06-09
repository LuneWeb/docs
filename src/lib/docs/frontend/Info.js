/* eslint-disable @typescript-eslint/no-unused-vars */
import { createHeader as h, createTinyHeader as th, createParagraph as p, createCode as code } from "$lib";

const template = "https://github.com/LuneWeb/LuneWeb-template/"

export default [
    h("Info"),
    p(`This documentation is specific to this <a href="${template}">template repo</a>`),
    th("TODO")
]