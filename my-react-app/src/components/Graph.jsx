import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { patrimoines } from '../mock/data';

function Graph({ startDate, endDate }) {
  const svgRef = useRef();

  useEffect(() => {
    const data = patrimoines.patrimoines.flatMap(p => 
      p.montants.filter(m => 
        (!startDate || new Date(m.date) >= new Date(startDate)) &&
        (!endDate || new Date(m.date) <= new Date(endDate))
      ).map(m => ({ date: new Date(m.date), value: m.montant }))
    );

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); 

    const width = window.innerWidth / 2;  
    const height = window.innerHeight - 60; 
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.attr("width", width)
       .attr("height", height)
       .style("display", "block")
       .style("margin", "0 auto");

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([margin.left, width - margin.right]);

    const yDomain = data.length ? [d3.min(data, d => d.value), d3.max(data, d => d.value)] : [0, 0];
    const y = d3.scaleLinear()
      .domain(yDomain)
      .range([height - margin.bottom, margin.top]);

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "teal")
      .attr("stroke-width", 4)
      .attr("d", line);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(d3.timeDay.every(1)).tickFormat(d3.timeFormat("%Y-%m-%d")));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [startDate, endDate]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth / 2;
      const height = window.innerHeight - 60;
      d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <svg ref={svgRef} className="border border-gray-300" />;
}

export default Graph;
