import React from "react";
import Botones from "./Botones";

const studentName = "Camilo Acevedo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };
const techRender = techSkills.map(tec => {
  return (
    <li>{tec}</li>
  )
})

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1 class="display-1 "> proyecto react </h1>
      <h3>{studentName}</h3>
      <Botones alerts={alerts} ></Botones>
      <ul id="lista" >{techRender}</ul>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
