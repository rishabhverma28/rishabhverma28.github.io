import React, { Component } from 'react'
import './App.css'
import { scaleLinear, scaleBand } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import { axisLeft, axisBottom } from 'd3-axis'

class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   // componentDidUpdate() {
   //    this.createBarChart()
   // }
   createBarChart() {
      const margin = {top:20, right:20, bottom:20, left:50}
      const width = this.props.size[0]- margin.left - margin.right
      const height = this.props.size[1] - margin.bottom - margin.top 
      const node = this.node
      let svg = select(node)
            .append("svg")
            .attr("width", width+ margin.left + margin.right)
            .attr("height", height+ margin.bottom + margin.top )
            .append("g")
                  .attr("transform", "translate(" + margin.left + ","+ margin.right + ")")
      // const dataMax = max(this.props.data,(d)=>d.value)
      const yScale = scaleBand()
         .domain(this.props.data.map((d) => d.name)).padding(0.5)
         .range([height, 0])
      const xScale = scaleLinear()
         .domain([0, 100])
         .range([0, width])
      
   svg
      .selectAll('.bars')
      .data(this.props.data)
      .enter()
      .append('rect')

   svg
      .append('g')
      .call(axisLeft(yScale))
   svg
      .append('g')
      .call(axisBottom(xScale))
      .attr('transform', 'translate(0,'+ height +')')

   console.log("ffff",yScale.bandwidth())
   svg
      .selectAll('rect')
      .data(this.props.data)
      
      .style('fill', '#fe9922')
      .attr('x', 0)
      .attr('y', d => yScale(d.name))
      .attr('height', d => yScale.bandwidth())
      .attr('width', d=> xScale(d.value))
svg
      .selectAll("text.label")
      .data(this.props.data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("y", d=>yScale(d.name)+yScale.bandwidth()/2+4)
      .attr("x", d=>xScale(d.value)+3)
      .text(d=>d.value)

   }
render() {
      return (
            <div className="chart" ref={node => this.node = node}>
            </div>
      )
   }
}
export default BarChart