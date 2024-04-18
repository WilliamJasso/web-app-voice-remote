import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./header";
import BtnInfo from "./btninfo";

function App() {
  const [latestOrder, setLatestOrder] = useState("");
  const [latestOrderId, setLatestOrderId] = useState("");
  const [isDifferentOrder, setIsDifferentOrder] = useState(false);

  useEffect(() => {
    fetchLatestOrder(); // Obtener la última orden al cargar el componente

    const interval = setInterval(fetchLatestOrder, 2000); // Actualizar la orden cada 2 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const fetchLatestOrder = () => {
    axios
      .get("https://660b579accda4cbc75dcaf79.mockapi.io/Orders")
      .then((response) => {
        if (response.data.length > 0) {
          const lastOrder =
            response.data[response.data.length - 1].order;
          const lastOrderId =
            response.data[response.data.length - 1].idOrder;

          if (lastOrderId !== latestOrderId) {
            setLatestOrder(lastOrder);
            setLatestOrderId(lastOrderId);
            setIsDifferentOrder(true); // Activar la animación solo si hay una nueva orden
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener el último pedido:", error);
      });
  };

  return (
    <div>
      <Header />
      <div className="App">
        <p>Ordenes en tiempo real</p>

        <div id="result" className={`Result ${isDifferentOrder ? "recognized" : ""}`}>
          <p>
            Última orden identificada: <strong>{latestOrder}</strong>
          </p>
        </div>
        <BtnInfo />
      </div>
    </div>
  );
}

export default App;
