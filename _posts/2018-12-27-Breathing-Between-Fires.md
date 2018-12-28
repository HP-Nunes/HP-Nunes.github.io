---
layout: post
title: "Breathing Between Fires"
date: 2018-12-26
---
<head>
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<!-- data -->
  <script src="/assets/postsAssets/2018-12-20-breathing-between-fires/data/PM25_NoNulls.js"></script>
  <script src="/assets/postsAssets/2018-12-20-breathing-between-fires/data/O3.js"></script>
  <script src="/assets/postsAssets/2018-12-20-breathing-between-fires/data/perimeterSonomaFire.js"></script>
  <script src="/assets/postsAssets/2018-12-20-breathing-between-fires/data/perimeterCampFire.js"></script>
  <script src="/assets/postsAssets/2018-12-20-breathing-between-fires/data/countiesCAboundaries.js"></script>
  <script src="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>
  <script src="/assets/postsAssets/2018-12-20-breathing-between-fires/src/leaflet.groupedlayercontrol.js"></script>
  <script src="/assets/postsAssets/2018-12-20-breathing-between-fires/src/leaflet.groupedlayercontrol.css"></script>
</head>
<style>
img{
  height:400px;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.imageBox:hover .hoverImg {
    display: block;
}
.imageBox {
  position: relative;
}
.imageBox .hoverImg {
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
.imageBox:hover .hoverImg {
  display: block;
}
</style>
<!-- Content -->
<br>
<h4>Towards a new abnormal</h4>
<br>
Having lived in the San Francisco Bay Area for nearly 10 years, my anxiety to natural disasters has always revolved around "The Big One", i.e. the next great earthquake born out of the San Andreas' fault, one equivalent to the 1906 event which left most of the city in ashes. Thankfully--thus far--all that I've ever felt have been small tremors, which I have taken as gentle reminders towards earthquake preparedness. However since last year I have come to realize that I have been taken for granted a more common place type of disasters, one exharcebated by years of droughts, mislead land management, and global climate change: fires.
<br><br>
During the fall of 2017, fires came to affect me in two ways: the first being that of a close one having to relocate due to a (thankfully mild) structure fire, and the other stemming from the series of wildfires in the North Bay otherwise known as the <a class="linked-text" href="https://en.wikipedia.org/wiki/October_2017_Northern_California_wildfires" target="_blank"> 2017 Sonoma Fires</a>. The former showed how disruptive such an event can be for any individual, including the difficulties of disaster response agencies  to accomodate victims of fires, even in a major city. The latter, which I experienced through the sight, smell and taste of degraded air, was a rude awakening to the environmental impact of large-scale fires. 
<br><br>
I was intending to write this post a couple of months back, with the intent to compare air quality readings in the SF Bay Area between this year and last Fall. All I wanted to show was a baseline of "normal conditions" (i.e. the absence of major nearby fires) with the dramatic air quality data of 2017 which I had collected earlier this year in my Data Bootcamp. However as I was getting my data cleaned and charted, this happened (taken on November 9th at 1pm):
<br><br>
<div class="imageBox">
  <div class="imageInn">
    <img src="/images/post_img/viewSFBay_CampFire.JPG" alt="Default Image">
  </div>
  <div class="hoverImg">
    <img src="/images/post_img/viewSFBay_normalconditions.jpg" alt="Profile Image" title="Under normative (and clear weather) conditions, Alameda and Marin Counties are visible from San Francisco's North Point">
  </div>
</div>
<center><u>Pictures taken by the author</u></center>
<br>
The view from San Francisco of Alameda and Marin Counties remained covered by the downstream Camp Fire's smoke for the better part of two weeks, an impact far lasting and felt than the 2017 Sonoma Fires. This lead me to revisit the U.S. Environmental Protection Agency<a href="https://docs.airnowapi.org/webservices" target="_blank"> AirNow's API</a> to comprehend the scope of the Camp Fire's effect on air pollution in the Bay Area compared to the Sonoma Fires.
<br><br><br>
<h4>From Bad to Worse</h4>
<br>
I should first provide a bit of <b>background</b> on how the data is collected, and on what it measures. Reading through metadata is always best practice to avoid confusion, or worse, a misinterpretation of data. In brief:<br>
<br>&nbsp;&nbsp;&nbsp;● The data provided is categorized into a unit known as the "Air Quality Index", or AQI (see chart below);
  <br><br>
  <a href="https://docs.airnowapi.org/aq101" target="_blank"><img src="/images/post_img/aqiTable.png" align="left"></a>
  <br><br><br><br><br><br><br><br><br><br><br><br>
<br>&nbsp;&nbsp;&nbsp;● The measuring sensors are tuned to measure levels of Ozone and fine particles respectively in the air;
<br>&nbsp;&nbsp;&nbsp;● The AQI is an average of measurements over regular hourly intervals (<a href="https://docs.airnowapi.org/aq101" target="_blank">more info</a>);
<br><br>
We are interested noticeably with fine particulates, namely PM<sub>2.5</sub>Particles. These are coarse dust particles of about 2.5 micrometers in diameter--about 3 times thinner than a single human hair--and are borned out of combustion. As you may have guessed, there is a strong correlation between fires and a large release of PM<sub>2.5</sub>Particles in the air, which represent a significant environmental health hazard; especially for populations vulnerable to respiratory diseases. I can personally attest to the particle's foul burning odor, and the enduring parching effect it can have on one's throat if exposed to unhealthy levels even for just ten minutes. Exposure to any amount of these particles should be minimal in all circumstances.
<br><br>
For the period of the Sonoma Fires, which were part of a larger chain of events otherwise known as the Northern California Fires, I retained data spanning from October 9th to the 15th. The reason being was to 1) limit the scope of my analysis for 2017 to fires with a most direct impact on air quality impact in the San Francisco Bay Area and 2) to work around resource limitations, namely the API's limit on requests and time allocated for the project. What I refer to as the "2017 Sonoma Fires" is in fact comprised of 3 fires spanning Sonoma and Napa County: <b>the Atlas Peak Fire, the Tubbs Fire, and the Nuns Fire</b>.
<br><br>
The Camp Fire's AQI was sampled from November 8th to the 18th, date at which over half of the fire was contained (and air quality in San Francisco noticeably began to improve).
<br><br>
<!-- ******************************************************************************** -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">[1]</div>
    <img src="/images/post_img/hist_Sonoma.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">[2]</div>
    <img src="/images/post_img/hist_CampFire.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">[3]</div>
    <img src="/images/post_img/timeSeries_Sonoma.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">[4]</div>
    <img src="/images/post_img/timeSeries_CampFire.png" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span>    
  <span class="dot" onclick="currentSlide(3)"></span> 
  <span class="dot" onclick="currentSlide(4)"></span> 
 
</div>
<!-- ******************************************************************************** -->
<script>
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
</script>
<br>
<!-- ******************************************************************************** -->
The charts above illustrate descriptive statistics of the AQI for the Sonoma and Camp Fires respectively. What can be gaged from simply observing the distribution of AQI between the two events is the magnitude of the catastrophe that was the Camp Fire. While the [1] histogram of the Sonoma Fires isn't exactly normally distributed as the data peaks slighly in the Unhealthy range, its average (as indicated with dashed lines) sits at the cusp between levels of Moderate concentration and Unhealthy for Sensitive Groups. [2] By contrast, despite being much further away than the fires over the North Bay (about 140 miles/ 230 Km away!), the average line shown on the histogram of the Camp Fire falls square in the Unhealthy range. Not only that, but its distribution is much more compact, forming a narrower bell curve, whose standard deviation falls still within the Unhealthy range. The point being: the AQI measurements of the Camp Fire were less spread than those of the Sonoma Fires, indicating a greater trend of degraded air quality in the Bay Area despite the much greater distance of the source of impact!
<br><br>
The timeseries showing the change in AQI for both ozone and fine particulates often parallels progress with containement and possibly changing weather conditions. [3] The cut-off date of October 15th is arbitrary, but by that date many of these fires had began to become contained. I think it's important to note that the convergence of AQIs for both pollutants on the 15th doesn't mean a return to baseline--normative--conditions, but towards a stabilization of air quality from the impact of the fires. Under baseline conditions, concentrations of PM<sub>2.5</sub>Particles should be negligible, unlike ground-level Ozone which is a likely constant in urban areas due to traffic and industrial activity (note how the latter's concentration is not directly affected by the fires). Once more, [4] the Camp Fire's chart tells a story of a worsening state of affairs, over a longer period and with a much larger impact.
<!-- ******************************************************************************** -->
<br><br><br>
<h4>Mapping the Difference</h4>
<!-- Leaflet.js Map -->
<br>
<div id="map"></div>
  <div id="map-legend">
    <br>
      <div class='title'><h4>Average Air Quality Change in <a class = 'link' href = 'https://airnow.gov/index.cfm?action=aqibasics.particle' target="_blank">PM<sub>2.5</sub>Particles</a> 
      <br> 2017 Sonoma Fires - 2018 Camp Fires</h4>
      <div class='title'>-84% . . . . . . . . . . . . . . . . . +246%</div>
    </div>
<script type="text/javascript">
// Hack to make display correctly in an iframe on bl.ocks.org
d3.select(self.frameElement).style("height", "1000px");
</script>
<script>
  window.onload = function () {
    var map = L.map("map").setView([38.43, -121.47], 8);
              L.tileLayer(
                "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3VhcG9yZSIsImEiOiJjanBnMWc1emYwZmxzM3dxaG95YjlpeG44In0.ZCll_-ScQC2V8JMVila5HA",
                {
                  maxZoom: 18,
                  attribution:
                    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                  id: "mapbox.light"
                }
              ).addTo(map);
        //-----------------------------------------------
        // Icons
        //-----------------------------------------------
        campfireIcon = L.icon({
                    iconUrl: '/assets/postsAssets/2018-12-20-breathing-between-fires/img/fire.svg',
                    iconSize: [38, 95], // size of the icon
                    popupAnchor: [0,-15],
                    });
                var customPopup = "Camp Fire, November 8th-25th 2018: Destroyed 18,804 structures, with most of the damage occurring within the first two days.<br> Insured damage estimated to be $7.5–10 billion; casualties estimated to include at least 86 civilians.<br/><center><br><img class = 'thumb_pop' src='/assets/postsAssets/2018-12-20-breathing-between-fires/img/campFire_escape.gif' alt='' width='350px'/><br><a href = 'https://www.reddit.com/r/gifs/comments/9vltq7/escaping_the_paradise_camp_fire/' target=_blank><i>Source</i></a></br></center>";        
                var customOptions =
                    {
                    'maxWidth': '500',
                    'className' : 'custom'
                    }
                L.marker([39.761550, -121.621361], {icon: campfireIcon})
                .bindPopup(customPopup,customOptions)
                .openPopup()
                .addTo(map);
                map.attributionControl.addAttribution(
                          'Fire icons &copy;<a href="https://www.flaticon.com/authors/icomoon" target=_blank title="Icomoon"> Icomoon</a>'
                )
        nunsfireIcon = L.icon({
                    iconUrl: '/assets/postsAssets/2018-12-20-breathing-between-fires/img/fire.svg',
                    iconSize: [38, 95], // size of the icon
                    popupAnchor: [0,-15],
                    });
                var customPopup = "Nuns Fire, October 8th-30th 2017: merged with the Norrbom, Adobe, Partrick, Pressley, and Oakmont Fires. <br> 1,355 structures destroyed, 56,556 acres burned, and three casualties.<br/><center><blockquote class= 'twitter-tweet' data-lang='en'><br>A staggering comparison of the acres burned on the <a href='https://twitter.com/hashtag/NunsFire?src=hash&amp;ref_src=twsrc%5Etfw'>#NunsFire</a>, during the October siege and statewide since the beginning of 2017. <a href='https://t.co/5yaeh3kEUF' target=_blank>pic.twitter.com/5yaeh3kEUF</a><br>&mdash; CAL FIRE (@CAL_FIRE) <br>October 20, 2017</br></blockquote><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'><\/script></center>";        
                var customOptions =
                    {
                    'maxWidth': '500',
                    'className' : 'custom'
                    }
                L.marker([38.424230, -122.556376], {icon: nunsfireIcon})
                .bindPopup(customPopup,customOptions)
                .openPopup()
                .addTo(map);
        atlasfireIcon = L.icon({
                    iconUrl: '/assets/postsAssets/2018-12-20-breathing-between-fires/img/fire.svg',
                    iconSize: [38, 95], // size of the icon
                    popupAnchor: [0,-15],
                    });
                var customPopup = "Atlas Peak Fire, October 8th-28th 2017: 781 structures destroyed, 120 structures damaged, and six casualties<br><center><br><img class = 'thumb_pop' src='/assets/postsAssets/2018-12-20-breathing-between-fires/img/atlas.jpg' alt='' width='350px'/><br><a href = 'https://www.washingtonpost.com/news/post-nation/wp/2017/10/09/these-images-show-the-devastation-caused-by-californias-deadly-wine-country-fires/?noredirect=on&utm_term=.ef9ac8f5a153' target=_blank><i>Source</i></a></br></center>";        
                var customOptions =
                    {
                    'maxWidth': '500',
                    'className' : 'custom'
                    }
                L.marker([38.429164, -122.246769], {icon: atlasfireIcon})
                .bindPopup(customPopup,customOptions)
                .openPopup()
                .addTo(map);
          tubbsfireIcon = L.icon({
                    iconUrl: '/assets/postsAssets/2018-12-20-breathing-between-fires/img/fire.svg',
                    iconSize: [38, 95], // size of the icon
                    popupAnchor: [0,-15],
                    });
                var customPopup = "Tubbs Fire, October 8th-31st 2017: 5,643 structures destroyed, 317 structures damaged, 1 injured<br/><center><blockquote class='twitter-tweet' data-lang='en'><br>One year ago today, I was immersed in the most destructive fire in California history. When I watched the <a href='https://twitter.com/hashtag/tubbsfire?src=hash&amp;ref_src=twsrc%5Etfw'>#tubbsfire</a> hop Hwy 128 at Bennet Lane and roar through Franz Valley, I knew <a href='https://twitter.com/hashtag/santarosa?src=hash&amp;ref_src=twsrc%5Etfw'>#santarosa</a> was in trouble. This clip is from Fountaingrove. <a href='https://twitter.com/NorthBayNews?ref_src=twsrc%5Etfw'>@NorthBayNews</a> <a href='https://t.co/hQqikrL4yr' target=_blank>pic.twitter.com/hQqikrL4yr</a><br>&mdash; Kent Porter (@kentphotos) <br>October 8, 2018</br></blockquote><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'><\/script></center>";        
                var customOptions =
                    {
                    'maxWidth': '500',
                    'className' : 'custom'
                    }
                L.marker([38.509164, -122.716977], {icon: tubbsfireIcon})
                .bindPopup(customPopup,customOptions)
                .openPopup()
                .addTo(map);
        //-----------------------------------------------
        //ingest the PM2.5 layer
        //-----------------------------------------------
        // control that shows info on hover
        // ********************************
        var info = L.control();
          info.onAdd = function(map) {
            this._div = L.DomUtil.create("div", "info");
            this.update();
            return this._div;
          };
          info.update = function(props) {
            this._div.innerHTML =
              "Air Quality Index<br><br>" +
              (props
                ? "<font color = 'yellow'>" + 
                  props.NAME + " County</font>" + " [zipcode: <font color = 'yellow'>" +
                  props.zipcode + "</font>]"+
                  "<br/>" +
                  " Air quality changed by an average of <font color = 'yellow'>" 
                  + props.pm25diff 
                  + "%</font> between the 2017 Sonoma Fires (<font color = 'red'>" 
                  + props.pm25_sf + " AQI</font>" + 
                  ") and the 2018 Camp Fire (<font color = 'red'>" +
                  props.pm25_cf + " AQI</font>)"
                : "Hover over a zipcode area");
          };
          info.addTo(map);
        // get color depending on AQI value
        // ********************************
        function getColor_PM25(d) {
            return d > 200
              ? "#b2182b"
                : d > 150
                ? "#d6604d"
                    : d > 100
                      ? "#f4a582"
                      : d > 0
                        ? "#fddbc7"
                          : d < 0 ? "#92c5de" : "#92c5de";
          }
          function style(feature) {
            return {
              weight: 2,
              opacity: 0.25,
              color: "white",
              dashArray: "1",
              fillOpacity: 0.65,
              fillColor: getColor_PM25(feature.properties.pm25diff)
            };
          }
          function highlightFeature(e) {
            var layer = e.target;
            layer.setStyle({
              weight: 5,
              color: "#666",
              dashArray: "",
              fillOpacity: 0.4
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
              layer.bringToFront();
            }
            info.update(layer.feature.properties);
          }
          var geojson_PM25;
          function resetHighlight(e) {
            geojson_PM25.resetStyle(e.target);
            info.update();
          }
          function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
          }
          function onEachFeature(feature, layer) {
            layer.on({
              mouseover: highlightFeature,
              mouseout: resetHighlight,
              click: zoomToFeature
            });
          }
          geojson_PM25 = L.geoJson(PM25, {
            style: style,
            onEachFeature: onEachFeature
          }).addTo(map);
          map.attributionControl.addAttribution(
            'Air Quality data &copy; <a href="https://docs.airnowapi.org/webservices">AirNow</a>'
          );
        //-----------------------------------------------
        //ingest and configure fire perimeter layers
        //-----------------------------------------------
        function perimeterStyle(feature) {
            return {
              weight: 3,
              opacity: 1,
              color: 'black',
              dashArray: "3",
              fillOpacity: 0
            };
          }
        campfireGeojson = L.geoJson(perimeterCampFire, {
          style: perimeterStyle
            })
            map.attributionControl.addAttribution(
            'Camp Fire perimeter &copy; <a href="https://ftp.nifc.gov/public/incident_specific_data/calif_n/!CALFIRE/2018_Incidents/CA-BTU-016737_Camp/">Cal Fire</a>'
          );
        sonomaGeojson = L.geoJson(perimeterSonomaFire, {
          style: perimeterStyle
            })
            map.attributionControl.addAttribution(
            'Sonoma Fires perimeter &copy; <a href="https://www.google.com/maps/d/u/0/viewer?ll=38.43724222548411%2C-122.4731338153872&&hl=en&mid=1TOEFA857tOVxtewW1DH6neG1Sm0&z=10">Cal Fire</a>'
          );
        //----------------------------------
        // LEGEND - lower right corner
        //----------------------------------
        var legend = d3.select("#map-legend").
        append("svg:svg").
        attr("width", 120).
        attr("height", 20)
        for (var i = 0; i <= 4; i++) {
          legend.append("svg:rect").
          attr("x", i*20).
          attr("height", 10).
          attr("width", 20).
          attr("class", "q" + i + "-9 ");//color
          };
        //-----------------------------------------------
        // Radio Button
        //-----------------------------------------------
        var basemap = {}
        var groupedOverlays = {
            "Fire Perimeters": {
            "Sonoma Fires": sonomaGeojson,
            "Camp Fire": campfireGeojson
          },
        };
        var options = {
              groupCheckboxes: false
            };
        L.control.groupedLayers(basemap,groupedOverlays,options).addTo(map)};
</script>
</div>
<!-- ******************************************************************************** -->
<br>
By averaging the AQI per fires by each <u>reporting location</u> (data was not collected at each zipcode, instead about 13 sampling stations were spread over the areas mapped above, hence why zipcodes may share the same AQI value), I sought to examine the difference in AQI between the two disasters. Not too unsurprisingly, areas further away from the sites of the Sonoma Fires registered a higher indice of worsening air quality as they were not sparred the downstream smoke of the Camp Fires. I am not surprised either that parts of Napa counties registered an average decrease of -87% as these areas were centerfold in the 2017's inferno, and I expected that trend to be true for areas of Sonoma which had been affected last year as well. However, the data actually indicates a worsening of air quality by an average of 139% in the areas of the Tubbs and Nuns Fires following this year's major fire!
<br><br>
So what do we make of this?
<br><br>
Well, data is primarily an empirical tool to help us understand our environment, i.e. a means to an end. I highly doubt that air quality in areas affected by the Nuns and TUbbs fire worsened by 139% the following year due to the Camp Fire. I believe what we have here is a limitation of the data available, and of the methodology employed. Namely, that data was collected at sampling stations interpolating for several zipcodes. Thus granularity was lost at the expense of making inferenced for larger areas (the author would like to stress that while he intended to overlay sampling areas--as opposed to zipcodes--he did not due to time constraints). I would also reconsider my temporal ranges in my sampling of data, to more accurately mirror full containement dates, in addition to including additional 2017 Northern California Fires which, while further away, may have had a further cumulitative impact on air quality.
<br><br>
Having laid out my reservations, I do want to stress that the map does indeed reveal a higher level truth: that air quality was substantially worse over larger portion of the states in 2018 compared to 2017's events. For perspective, the Camp Fire alone burned over 150,000 acres of land, more than the three selected 2017 fires combined (while the 250 wildfires that comprised the 2017 Northern California fires burned over 245,000 acres, spread over many counties). I recall that 2017 fires were the costliest and deadliest in the state history, and sadly the casualty record was increased by a factor of 2 during this year's tragedy. And while impact on air quality has perhaps not been framed in media narrative of historicity (and let's be fair, quantifying air quality is relatively recent and difficult), I suspect that the trend may be downward if 100 year fires become annual occurences.