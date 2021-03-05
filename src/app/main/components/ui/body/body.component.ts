import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  header = '';
  detail = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(params => {
      params.forEach(data => {
        if (data){
          let str = ''; const split = data.path.split('-');
          for (let index = 0; index < split.length; index++) {
              str += split[index][0].toUpperCase() + split[index].substr(1).toLowerCase() + ' ';
          }
          this.header = str;
          if (data.path == 'run-charts'){
            this.detail = `A run chart is a line chart of data plotted over time. In other words, a run
                          chart graphically depicts the process performance or data values in time order.
                          Viewing data over time gives a more accurate conclusion rather than just summary statistics.
                          A run chart is also known as trend chart or time series plot`;
          }
          else if (data.path == 'ordering-charts'){
            this.detail = `In Chart and Visualization mode, you can now sort your bar, line,
                           and area charts by the total value. While this feature was implemented
                           specifically for Stacked Bar charts, it also applies to other chart types.
                           This feature enables you to view your data in numerical order, allowing you
                           to identify trends and determine what data points are priorities. For example,
                           the chart in the following image is set to Ascending, which sorts the chart from
                           the lowest value to the highest value`;
          }
          else if (data.path == 'special-charts'){
            this.detail = `Popular graph types include line graphs, bar graphs, pie charts,
                           scatter plots and histograms. Graphs are a great way to visualize data
                           and display statistics. For example, a bar graph or chart is used to display
                           numerical data that is independent of one another`;
          }
          else if (data.path == 'hypothesis-test'){
            this.detail = `Hypothesis testing is an act in statistics whereby an analyst tests an
                           assumption regarding a population parameter. The methodology employed by
                           the analyst depends on the nature of the data used and the reason for the analysis.`;
          }
          else if (data.path == 'correlation-data'){
            this.detail = `Correlation is a statistical technique that can show whether
                           and how strongly pairs of variables are related. For example,
                           height and weight are related; taller people tend to be heavier than
                           shorter people. The relationship isn't perfect`;
          }
          else if (data.path == 'multi-correlation-data'){
            this.detail = `A multiple correlation coefficient (R) yields the maximum degree of
                          liner relationship that can be obtained between two or more independent
                          variables and a single dependent variable.`;
          }
          else if (data.path == 'exploratory-data-analysis'){
            this.detail = `Exploratory data analysis (EDA) is used by data scientists to analyze
                           and investigate data sets and summarize their main characteristics,
                           often employing data visualization methods. ... It can also help determine
                           if the statistical techniques you are considering for data analysis are appropriate.`;
          }
          else if (data.path == 'home'){
            this.header = 'Knowledge Management';
            this.detail = `The main goal of knowledge management is to improve an organization's efficiency and save knowledge within the company.
                          Often it is referring to training and learning in an organization or of its customers. It consists of a cycle of creating,
                          sharing, structuring and auditing knowledge, in order to maximize the effectiveness of an organization’s collective knowledge.
                          The goal is to enable organizational learning and create a learning culture, where the sharing of knowledge is encouraged and those who seek to learn to better themselves find it easy to do so.
                          When thinking about knowledge management, it is helpful to consider the types of knowledge and how possible it is to share that knowledge within an organization.
                          Tacit knowledge and explicit knowledge are the two main types of knowledge covered within the definition of knowledge management.
                          Tacit knowledge is more intuitive, less easy to package and share with others. Examples of tacit knowledge are innovative thinking and understanding body language.
                          Explicit knowledge is information that is easily codified and taught, such as how to change the toner in a printer and mathematical equations.
                          Successful knowledge management will improve an organization in several ways. It will ensure that the specialized knowledge of employees does not leave with them, or go unutilized by other employees who would benefit from that knowledge.
                          It allows for better situational awareness, as well as opening doors for learning about best practices, lessons learned, and overall organizational improvement.`;
          }
          else{
            this.detail = 'we will explore more about data mining. Coming Soon!';
          }
        }
      });
    });
  }

}
