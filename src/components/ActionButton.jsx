function ActionButton({action}) {

  return (
    <button className="vpet-btn" onClick={action} actionName="Alimentando"/> // actionName se usara luego para 
  );                                                                         // mostrar la stat en pantalla

}

export default ActionButton