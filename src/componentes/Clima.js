import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { guardarPronosticos } from "../features/climaSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Pronostico para Montevideo',
    },
  },
};

export const Clima = () => {
  const dispatch = useDispatch();
  const windows = useNavigate();
  const pronostico =   useSelector(state=> state.clima.pronosticos)
  const pronosticoMin =   useSelector(state=> state.clima.pronosticosMin)
  useEffect(() => {
    if (localStorage.getItem("session") === null) {
      windows("/");
    } else {
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-34.9033&longitude=-56.1882&daily=temperature_2m_max,temperature_2m_min&timezone=auto"
      )
        .then((r) => r.json())
        .then((re) => {
          console.log(re);
          dispatch(guardarPronosticos(re.daily));
        });
    }
  }, []);

  return (
    <div>
      <h1>Clima</h1>
      {pronostico}
      <Bar options={options} data={{
                labels:['DIA 1','DIA 2','DIA 3','DIA 4','DIA 5','DIA 6','DIA 7',],
                datasets: [
                    {
                    label: 'Maximas',
                    data: pronostico,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: 'Minimas',
                        data: pronosticoMin,
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    }
                ],
            }} />
    </div>
  );
};

export default Clima;
