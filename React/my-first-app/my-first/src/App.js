import React, { Component } from 'react';
import { LineChart } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import { PieChart } from '@gooddata/react-components';
import { ColumnChart } from '@gooddata/react-components';
import { Visualization } from '@gooddata/react-components';
import { DonutChart } from '@gooddata/react-components';
import { factory as SdkFactory } from '@gooddata/gooddata-js';

import './App.css';

const measures = [
    {
        measure: {
            localIdentifier: 'acJoZSZMgPGP',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: 'acJoZSZMgPGP'
                    }
                }
            }
        }
    },
    {
        measure: {
            localIdentifier: 'aax4zfqAgwQu',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: 'aax4zfqAgwQu'
                    }
                }
            }
        }
    },
    {
        measure: {
            localIdentifier: 'abktNe8sdXqU',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: 'abktNe8sdXqU'
                    }
                }
            }
        }
    }

];

const attribute = {
    visualizationAttribute: {
        displayForm: {
            identifier: 'label.admittedstudents.state'
        },
        localIdentifier: 'State'
    }
};


const measuresss = [
    {
        measure: {
            localIdentifier: 'acJoZSZMgPGP',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: "acJoZSZMgPGP"
                    }
                }
            },
            format: '#,##0'
        }
    },
    {
        measure: {
            localIdentifier: 'abq4uPg7g3pN',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: "abq4uPg7g3pN"
                    }
                }
            },
            format: '#,##0'
        }
    },
    {
        measure: {
            localIdentifier: 'acXBgcNyepCw',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: "acXBgcNyepCw"
                    }
                }
            },
            format: '#,##0'
        }
    }
];


const sdk = SdkFactory();




class App extends Component {

    
   render() {


    
      return (


        
         <div className="App">

         <h2>Line Chart</h2>
           
            <div style={{ height: 300 }}>
               <LineChart
                  projectId='n4qgebtg809vbi573dvat2s28rizwkm0'
                  measures={measures}
                  trendBy={attribute}
                  config={{
                      colors: ['#14b2e2','rgb(168, 194, 86)', '#ff140a']
                  }}
              />


        <h2>Pie Chart</h2>


            <PieChart
                projectId='n4qgebtg809vbi573dvat2s28rizwkm0'
                measures={measuresss}
                trendBy={attribute}
                config={{
                colors: ['#14b2e2','rgb(168, 194, 86)','rgb(195, 49, 73)']
                }}
            />

        <h2>Column Chart</h2>

            <ColumnChart
              projectId='n4qgebtg809vbi573dvat2s28rizwkm0'
              measures={measures}
              config={{
              colors: ['#14b2e2','rgb(168, 194, 86)']
              }}
                />

        <h2>visulaization</h2>



        <Visualization
            identifier="acdJ70ZLbNPs"
            projectId="n4qgebtg809vbi573dvat2s28rizwkm0"
            config={{
                colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)'],
                legend: {
                enabled: true,
                position: 'bottom'
                }
            }}
        />

    <h2>Donut Chart</h2>


    <DonutChart
        projectId="n4qgebtg809vbi573dvat2s28rizwkm0"
        measures={measuresss}
    />


            </div>
          
         </div>
      );
   }
}

export default App;