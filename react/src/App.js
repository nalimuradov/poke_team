import React from "react";
import Titles from "./components/titles";
import Form from "./components/form";
import Pkmn from "./components/pkmn";

class App extends React.Component {
  state = {
    pk1: undefined,
    pk2: undefined,
    pk3: undefined,
    pk4: undefined,
    pk5: undefined,
    pk6: undefined
  }

  getPkmn = async (e) => {
    e.preventDefault();
    const r = e.target.elements.game.value;
    //const r = 1;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokedex/${r}/`); 
    const data = await apiCall.json();

    if (r){
      var temp = [];
      data.pokemon_entries.forEach(x => temp.push(x.pokemon_species.name));
      var out = filter(temp);
      this.setState({
        pk1: out[Math.floor(Math.random()*152)],
        pk2: out[Math.floor(Math.random()*152)],
        pk3: out[Math.floor(Math.random()*152)],
        pk4: out[Math.floor(Math.random()*152)],
        pk5: out[Math.floor(Math.random()*152)],
        pk6: out[Math.floor(Math.random()*152)]
      });
      //console.log(out);
    } else {
      this.setState({
        pk1: undefined,
        pk2: undefined,
        pk3: undefined,
        pk4: undefined,
        pk5: undefined,
        pk6: undefined
      });      
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-7 form-container">
                  <Form getPkmn={this.getPkmn}/>
                  <Pkmn
                      pk1={this.state.pk1}
                      pk2={this.state.pk2}
                      pk3={this.state.pk3}
                      pk4={this.state.pk4}
                      pk5={this.state.pk5}
                      pk6={this.state.pk6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function filter(arr){
  var evoID = [3,6,9,12,15,18,20,22,24,26,28,31,34,36,38,40,45,47,49,51,53,55,57,59,62,65,68,71,73,76,78,80,83,85,87,89,91,94,97,99,101,103,105,106,107,110,115,119,121,
          122,124,127,128,130,131,132,134,135,136,139,141,142,143,144,145,146,149,150,151,154,157,160,162,164,166,168,169,171,178,181,182,184,185,186,189,192,195,
          196,197,199,201,202,203,205,206,208,210,211,212,213,214,217,219,222,224,225,226,227,229,230,232,234,235,237,241,242,243,244,245,248,249,250,251,254,257,
          260,262,264,267,269,272,275,277,279,282,284,286,289,291,292,295,297,301,302,303,306,308,310,311,312,313,314,317,319,321,323,324,326,327,330,332,334,335,
          336,337,338,340,342,344,346,348,350,351,352,354,357,358,359,362,365,367,368,369,370,373,376,377,378,379,380,381,382,383,384,385,386,389,392,395,398,400,
          402,405,407,409,411,413,414,416,417,419,421,423,424,426,428,429,430,432,435,437,441,442,445,448,450,452,454,455,457,460,461,462,463,464,465,466,467,468,
          469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,497,500,503,505,508,510,512,514,516,518,521,523,
          526,528,530,531,534,537,538,539,542,545,547,549,550,553,555,556,558,560,561,563,565,567,569,571,573,576,579,581,584,586,587,589,591,593,594,596,598,601,
          604,606,609,612,614,615,617,618,620,621,623,625,626,628,630,631,632,635,637,638,639,640,641,642,643,644,645,646,647,648,649,652,655,658,660,663,666,668,
          671,673,675,676,678,681,683,685,687,689,691,693,695,697,699,700,701,702,703,706,707,709,711,713,715,716,717,718,719,720,721,724,727,730,733,735,738,740,
          741,743,745,746,748,750,752,754,756,758,760,763,764,765,766,768,770,771,773,774,775,776,777,778,779,780,781,784,785,786,787,788,791,792,793,794,795,796,
          797,798,799,800,801,802,804,805,806,807];

      var output = [];

      for (var i = 0; i < evoID.length; i++){
        output.push(arr[evoID[i]-1]);
      }

      return output;

}

export default App;