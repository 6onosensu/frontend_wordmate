import styles from "./App.module.css"
import Button from './components/Button/Button'

function App() {

  const handleClick = () => {
    alert("Button Clicked!");
  }

  return (
    <div className={styles.app}>
      <Button variant="primary" onClick={handleClick}>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="submit" canSubmit>Submit Button</Button>
    </div>
  )
}

export default App
