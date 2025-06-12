import useSwitch from "./useSwith";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";
import useKeyPress from "./useKeyPress";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer('🔥');
  const isEnterPressed = useKeyPress('Enter');

  return (
    <>
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
        <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isEnterPressed ? 'Enter premuto! ✅' : 'Aspettando input... ⌨️'}</p>
      <p>Stato: {isEnterPressed.toString()}</p> {/* Temporaneo per debug */}
    </div>
    </>
  );
}

export default App;