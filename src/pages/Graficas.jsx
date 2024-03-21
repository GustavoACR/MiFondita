import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { useGetTemperaturaExternaQuery } from "../api/OcsakApi";
import { useGetTemperaturaInternaQuery } from "../api/OcsakApi";
import { useGetHumedadRelativaQuery } from "../api/OcsakApi";
import { useGetBateriaQuery } from "../api/OcsakApi";
import { useGetAceleracionQuery } from "../api/OcsakApi";
import { useGetVibracionQuery } from "../api/OcsakApi";
import { useGetConcentracionO2Query } from "../api/OcsakApi";
import { useGetConcentracionCO2Query } from "../api/OcsakApi";
import { useGetConcentracionCOQuery } from "../api/OcsakApi";

const ChartComponent = () => {
  const {
      data: temperaturaExterna
    } = useGetTemperaturaExternaQuery();
    const {
      data: temperaturaInterna
    } = useGetTemperaturaInternaQuery();
    const {
      data: humedadRelativa
    } = useGetHumedadRelativaQuery();
    const {
      data: nivelBateria
    } = useGetBateriaQuery();
    const {
      data: aceleracion
    } = useGetAceleracionQuery();
    const {
      data: vibracion
    } = useGetVibracionQuery();
    const {
      data: concentracionO2
    } = useGetConcentracionO2Query();
    const {
      data: concentracionCO2
    } = useGetConcentracionCO2Query();
    const {
      data: concentracionCO
    } = useGetConcentracionCOQuery();

    if (temperaturaExterna === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const temperaturaExternaNumerica = temperaturaExterna.map(Number);

    if (temperaturaInterna === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const temperaturaInternaNumerica = temperaturaInterna.map(Number);

    if (humedadRelativa === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const humedadRelativaNumerica = humedadRelativa.map(Number);

    if (nivelBateria === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const nivelBateriaNumerica = nivelBateria.map(Number);

    if (aceleracion === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const aceleracionNumerica = aceleracion.map(Number);

    if (vibracion === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const vibracionNumerica = vibracion.map(Number);

    if (concentracionO2 === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const concentracionO2Numerica = concentracionO2.map(Number);

    if (concentracionCO2 === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const concentracionCO2Numerica = concentracionCO2.map(Number);
    console.log(concentracionCO2Numerica);

    if (concentracionCO === undefined) {
      return null; // O mostrar un mensaje de carga o error
    }
    const concentracionCONumerica = concentracionCO.map(Number);

  const getChartDataTempEx = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'Temperatura Exterior',
      data: temperaturaExternaNumerica,
    }]
  };
};
const getChartDataTempIn = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'Temperatura Exterior',
      data: temperaturaInternaNumerica,
    }]
  };
};
const getChartDataHumedad = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'Humedad Relativa',
      data: humedadRelativaNumerica,
    }]
  };
};
const getChartDataNivelBateria = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'Nivel de Bateria',
      data: nivelBateriaNumerica,
    }]
  };
};
const getChartDataAceleracion = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'Aceleracion',
      data: aceleracionNumerica,
    }]
  };
};
const getChartDataVibracion = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'Vibracion',
      data: vibracionNumerica,
    }]
  };
};
const getChartDataO2 = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'O2',
      data: concentracionO2Numerica,
    }]
  };
};
const getChartDataCO2 = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'CO2',
      data: concentracionCO2Numerica,
    }]
  };
};
const getChartDataCO = () => {
  return {
    options: {
      chart: {
        id: 'basic-bar'
      },
    },
    series: [{
      name: 'CO',
      data: concentracionCONumerica,
    }]
  };
};

  return (
    <div className="chart">
      <p className="text-xl font-bold text-center mb-5">
      Temperatura Interna
      </p>
      <ReactApexChart options={getChartDataTempIn().options} series={getChartDataTempIn().series} type="line" height={350} />
      
      <p className="text-xl font-bold text-center mb-5">
        Temperatura Externa
      </p>
      <ReactApexChart options={getChartDataTempEx().options} series={getChartDataTempEx().series} type="line" height={350} />

      <p className="text-xl font-bold text-center mb-5">
        Humedad Relativa
      </p>
      <ReactApexChart options={getChartDataHumedad().options} series={getChartDataHumedad().series} type="line" height={350} />

      <p className="text-xl font-bold text-center mb-5">
        Nivel de Bateria
      </p>
      <ReactApexChart options={getChartDataNivelBateria().options} series={getChartDataNivelBateria().series} type="line" height={350} />

      <p className="text-xl font-bold text-center mb-5">
        Aceleracion
      </p>
      <ReactApexChart options={getChartDataAceleracion().options} series={getChartDataAceleracion().series} type="line" height={350} />

      <p className="text-xl font-bold text-center mb-5">
        Vibracion
      </p>
      <ReactApexChart options={getChartDataVibracion().options} series={getChartDataVibracion().series} type="line" height={350} />

      <p className="text-xl font-bold text-center mb-5">
        Concentracion de O2
      </p>
      <ReactApexChart options={getChartDataO2().options} series={getChartDataO2().series} type="line" height={350} />

      <p className="text-xl font-bold text-center mb-5">
        Concentracion de CO2
      </p>
      <ReactApexChart options={getChartDataCO2().options} series={getChartDataCO2().series} type="line" height={350} />

      <p className="text-xl font-bold text-center mb-5">
        Concentracion de CO
      </p>
      <ReactApexChart options={getChartDataCO().options} series={getChartDataCO().series} type="line" height={350} />
    </div>
  );
};

export default ChartComponent;

