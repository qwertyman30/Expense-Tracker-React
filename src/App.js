import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e2",
      title: "Internet",
      amount: 42.69,
      date: new Date(2021, 2, 22),
    },
    {
      id: "e3",
      title: "Phone",
      amount: 495.25,
      date: new Date(2021, 2, 24),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 39.99,
      date: new Date(2021, 2, 27),
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
