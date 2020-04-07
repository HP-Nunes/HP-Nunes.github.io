---
layout: post
title: "Mission Bay, 2019 Indoor Pool Patronage Report"
date: 2020-04-07
categories: Data-Analysis Data-Report Data-Visualization Plotly Python
jupyter:
  jupytext:
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.2'
      jupytext_version: 1.4.1
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
table {
  display: table;
  border-collapse: separate;
  border-spacing: 4px;
  border-color: gray;
}
.plots{
  height:300px;
  width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<img src="/images/post_img/2020-04-07-report/mb_indoors.jpg" alt="Profile Image" title="MB Indoor Pool" class="center">
<br>

# <center> 2019 Tally Summary: MB Indoor Pool</center>
##### <center>  Hadrien N Picq, April 7th, 2020 </center>

<center><br><a href="https://pdf-ace.com/pdfme/" target= "_blank">Save Report as PDF</a></center>

### Table of Content

1. [Executive Summary. ](#summary)
2. [ Technical Summary. ](#desc)
3. [ Annual Trends at a Glance. ](#trends)
4. [Analysis](#analysis1)

<br>
<a name="summary"></a>
## 1. Executive Summary

Over the course of 2019, the MB Indoor Pool has been patronized at least 43,067 times over the course of 324 days; that's approximately 133 times/day. During that time, the pool has seen the <em>equivalent</em> of five days without patronage, in addition to 5 days of unanticipated closure.

Daily patronage over the Weekend is nearly above the daily average; the busiest time being from 4 to 5pm likely due to Family Swim programming. Lowest rate of patronage tends to happen on weekdays, around opening (5-7am) and closing (8-9pm) hours respectively.

There are noticeable seasonal trends: January registers the second highest rate of patronage with a cumulitative 5,115 patrons, but sees a dramatic drop by nearly half the following month. Patronage rises through Spring and peaks in April, and decreases steadily throughout the summer until patronage spikes again in September, the year's busiest month (with 5,309 patrons). Due to missing tallies however, records for October and November are largely incomplete (especially for the latter), thus observations about Fall attendance must be tempered.

Patronage of the Indoor Pool occurs primarily during Lap Swim (a third of annual patronage), followed by Family Swim (which represents nearly a quarter of annual patronage). There are nearly always more lap swimmers for any given month than for any other single pool activity. 

On weekends between 8am and 1pm, patronage is much higher on average when lessons are scheduled than on weekends with no lessons (by nearly 25%).

Tallying amounts to 9 hours worth of collection per day on average. The dataset represents 314 days, after dropping 10 days with less than 7 tallies in order to filter out deflated values. It is estimated that the tally for 2019 represents at least 45% of what can be tallied for the year (the actual figure ought to be higher when factoring the missing tallies for October-November, Holiday scheduling, and accounting the scheduling difference between weekdays and weekends; I "guestimate" the actual figure to be at least 60%).

---
Note that the use of "patron/swimmer" in the text and charts is not to be interpreted as a unique patron using the facility. Patronage ought to be interpreted in the vein of "usage" by <em>individuals</em>, whether unique or reoccuring. If I use the terms "patron" and "swimmer", it is only within the scope of customer service.
---
<br><br>
<!-- #region -->
<a name="desc"></a>
## 2. Technical Summary

### A. Data Cleaning and Manipulation

I am including the following explanation below to provide some insight into the data cleaning process and the decision-making process in excluding some of the data.
<br>

I filtered the original dataset based on the following criteria:
* I only retained tallies for 2019 (January 1st - December 31st);
* I excluded days with noted pool closures on: January, Thursday 17th (from 5:45 am to 8:15 am); February, Sunday 10th to Thursday 14th (door-breaking incident), and May, Sunday 26th at 10:45 am; 
* I dropped rows <em>if</em> no tallies where taken for any Aquatic Activity (i.e. Family Swim, Lap Swim, Water Excercise, and Aquatic Programs), i.e. if the row only had NULL for any tally. You can think of those as missing tallies.
* <b>Disclaimer!</b> The tally sheets for the period spanning October 21st to November 24th were missing, which are equivalent to four weeks worth of tallies. Thus there is a significant gap in the dataset for the Fall period. 

As a result, approximately <b>45 %</b> of rows were retained from the original raw dataset, with a count breakdown per Aquatic Activity summarized in the table below:
<br><br>
<center>Sample Size of the Filtered 30 min Incremental Dataset</center>
<br>
<table>
<thead>
<tr>
<th style="text-align:left">Sample Size (N)</th>
<th style="text-align:center">Family Swim</th>
<th style="text-align:center">Lap Swim</th>
<th style="text-align:center">Water Excercise</th>
<th style="text-align:center">Aquatic Programs</th>
<th style="text-align:right">Total number of rows</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">N = number of rows</td>
<td style="text-align:center">689</td>
<td style="text-align:center">3,646</td>
<td style="text-align:center">973</td>
<td style="text-align:center">1,005</td>
<td style="text-align:right">5581</td>
</tr>
</tbody>
</table>


<br>
The filtered dataset represents a total of <b>167,430 minutes</b>, or approximately over <b>116 days</b>, for which tallies were recorded. There were 241 recorded instances of 0 swimmers, equivalent to <b>7,230 minutes</b> or <b>approximately 5 days</b>.

Do note however that, once the dataset is grouped by the day, these 167,430 minutes of collected tallies are spread over 314 days, roughly equivalent of <b>9 hours worth of collected tallies per day on average</b>. For added context, if we assume on most weekdays that the pool is operational from 5:30 am to 9:30 pm, and closed from 12:00 pm to 4 pm, usual operational hours at the Indoor Pool should be amounting close to 12 hours.

Holidays were defined by the Fitness Facility's [Holiday Schedules](https://campuslifeservices.ucsf.edu/fitnessrecreation/services/fitness_centers/hours_of_operation), transposed for 2019.

<br>
I subsequently was able to manipulate the dataset by grouping tallies by hours, days, and months.
The daily patronage dataset can be observed in the table below:
<div>
    <a href="https://plotly.com/~HP-Nunes/241/?share_key=QkWcD47MWXwIpX6r9sJJ4u" target="_blank" title="table_daily" style="display: block; text-align: center;"><img src="https://plotly.com/~HP-Nunes/241.png?share_key=QkWcD47MWXwIpX6r9sJJ4u" alt="table_daily" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="HP-Nunes:241" sharekey-plotly="QkWcD47MWXwIpX6r9sJJ4u" src="https://plotly.com/embed.js" async></script>
</div>


### B. Descriptive Statistics of Daily Patronage

I dropped rows where the number of tallies <b>grouped by the day</b>  where below two standard deviation from the mean. In other words, from a maximum of 32 tallies that can be taken per day, I dropped those which had fewer than 7 entries (given the average was close to 18 tallies/days).

I ended-up removing about 10 entries (or days) down to <b>a total of 314 days</b>. I deemed this to be a necessary step in order to remove tallies with--for the most part--deflated values, thereby filtering out outlier values from the dataset.
<br><br>
<center>Statistical Summary of Daily Patronage of Bakar Indoor Pool for 2019</center>
<br>
<table>
<thead>
<tr>
<th style="text-align:left">Statistic (number of Swimmers)</th>
<th style="text-align:center">Family Swim</th>
<th style="text-align:center">Lap Swim</th>
<th style="text-align:center">Water Excercise</th>
<th style="text-align:center">Aquatic Programs</th>
<th style="text-align:right">All</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Average (rounded to nearest integer)</td>
<td style="text-align:center">33</td>
<td style="text-align:center">46</td>
<td style="text-align:center">26</td>
<td style="text-align:center">30</td>
<td style="text-align:right">136</td>
</tr>
<tr>
<td style="text-align:left">Standard Deviation (rounded to the nearest hundredth)</td>
<td style="text-align:center">53.10</td>
<td style="text-align:center">41.68</td>
<td style="text-align:center">24.07</td>
<td style="text-align:center">51.87</td>
<td style="text-align:right">99.05</td>
</tr>
<tr>
<td style="text-align:left">Minimum X Maximum</td>
<td style="text-align:center">0 X 319</td>
<td style="text-align:center">0 X 566</td>
<td style="text-align:center">0 X 101</td>
<td style="text-align:center">0 X 331</td>
<td style="text-align:right">28 X 679</td>
</tr>
<tr>
<td style="text-align:left">25% Quartile (rounded to the nearest hundredth)</td>
<td style="text-align:center">3.00</td>
<td style="text-align:center">28.00</td>
<td style="text-align:center">0.00</td>
<td style="text-align:center">0.00</td>
<td style="text-align:right">79.00</td>
</tr>
<tr>
<td style="text-align:left">50% Quartile (rounded to the nearest hundredth)</td>
<td style="text-align:center">10.00</td>
<td style="text-align:center">41.00</td>
<td style="text-align:center">26.50</td>
<td style="text-align:center">7.00</td>
<td style="text-align:right">106.00</td>
</tr>
<tr>
<td style="text-align:left">75% Quartile (rounded to the nearest hundredth)</td>
<td style="text-align:center">43.00</td>
<td style="text-align:center">56.00</td>
<td style="text-align:center">43.00</td>
<td style="text-align:center">36.75</td>
<td style="text-align:right">155.00</td>
</tr>
</tbody>
</table>

<br><br>
The two plots below shows the <b>Histogram & Boxplot of patronage for all Aquatic Activities per day</b> for the entire dataset in 2019:
<div class="plots">
    <img src="/images/post_img/2020-04-07-report/histogram1.png" alt="Histogram #1" class="center">
</div>
<br>
The distribution of total daily patronage follows a normal distribution skewing to the right, with <b>a daily average of 136 patrons</b>. The right-skewing in the histogram can be explained by a many handful of outliers where attendance was very high (with a recorded <b>maximum of 679 daily patrons</b>).

<div class="plots">
<img src="/images/post_img/2020-04-07-report/boxplot1.png" alt="Boxplot1" class="center">
</div>

From the boxplot above, note that the <b>median is equal to 106 daily patrons</b>, a useful comparative statistic to the mean (shown as the green triangle), as the median is less suceptible to outlier values. That being said, since the distribution is approximately Gaussian (bell-curved), the mean should be approximate to the "real mean" of the population; i.e. the average daily patronage if we had 100% of all tallies recorded. 
<!-- #endregion -->
<br><br>
<a name="trends"></a>
## 3. Annual Trends at a Glance


### A. Hourly Trends
<b>Observations</b>:
<ul type = "circle"> 
<li>The busiest timewas at 5:15 pm on February 2nd, with 80 recorded swimmers during Family Swim.</li>
<li>On average, attendance rises steadily from opening hours and sharply increases between 3 to 6 pm (most likely due to Family Swim programming), and steadily decreases from 6 pm until closing.</li>
</ul>     
<br>
<div>
    <a href="https://plotly.com/~HP-Nunes/231/?share_key=l9Amjg71LyZXrOdJEVmUHt" target="_blank" title="patron2019" style="display: block; text-align: center;"><img src="https://plotly.com/~HP-Nunes/231.png?share_key=l9Amjg71LyZXrOdJEVmUHt" alt="patron2019" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="HP-Nunes:231" sharekey-plotly="l9Amjg71LyZXrOdJEVmUHt" src="https://plotly.com/embed.js" async></script>
</div>


<center>Statistics of Hourly Patronage

<table>
<thead>
<tr>
<th>Hour</th>
<th>No of Tallies</th>
<th>mean</th>
<th>std</th>
<th>min</th>
<th>25%</th>
<th>50%</th>
<th>75%</th>
<th>max</th>
</tr>
</thead>
<tbody>
<tr>
<td>5</td>
<td>126</td>
<td>1.72222</td>
<td>1.35433</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>3</td>
<td>5</td>
</tr>
<tr>
<td>6</td>
<td>249</td>
<td>2.71486</td>
<td>1.52764</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>7</td>
</tr>
<tr>
<td>7</td>
<td>289</td>
<td>3.12111</td>
<td>2.25521</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>15</td>
</tr>
<tr>
<td>8</td>
<td>515</td>
<td>5.11068</td>
<td>5.19403</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>6</td>
<td>26</td>
</tr>
<tr>
<td>9</td>
<td>492</td>
<td>11.4675</td>
<td>5.85335</td>
<td>0</td>
<td>8</td>
<td>12</td>
<td>16</td>
<td>32</td>
</tr>
<tr>
<td>10</td>
<td>507</td>
<td>8.37278</td>
<td>6.28137</td>
<td>0</td>
<td>3</td>
<td>7</td>
<td>12</td>
<td>33</td>
</tr>
<tr>
<td>11</td>
<td>475</td>
<td>6.79789</td>
<td>6.80509</td>
<td>0</td>
<td>2</td>
<td>4</td>
<td>10.5</td>
<td>36</td>
</tr>
<tr>
<td>12</td>
<td>442</td>
<td>7.33258</td>
<td>6.12384</td>
<td>0</td>
<td>3</td>
<td>5</td>
<td>11</td>
<td>35</td>
</tr>
<tr>
<td>13</td>
<td>137</td>
<td>7.11679</td>
<td>7.65148</td>
<td>0</td>
<td>3</td>
<td>5</td>
<td>8</td>
<td>44</td>
</tr>
<tr>
<td>14</td>
<td>147</td>
<td>8.46939</td>
<td>9.92872</td>
<td>0</td>
<td>4</td>
<td>6</td>
<td>8</td>
<td>67</td>
</tr>
<tr>
<td>15</td>
<td>146</td>
<td>10.7329</td>
<td>11.7903</td>
<td>0</td>
<td>5</td>
<td>7</td>
<td>11</td>
<td>72</td>
</tr>
<tr>
<td>16</td>
<td>489</td>
<td>13.5337</td>
<td>12.6337</td>
<td>0</td>
<td>5</td>
<td>10</td>
<td>17</td>
<td>69</td>
</tr>
<tr>
<td>17</td>
<td>475</td>
<td>14.3053</td>
<td>14.7673</td>
<td>0</td>
<td>5</td>
<td>8</td>
<td>20</td>
<td>80</td>
</tr>
<tr>
<td>18</td>
<td>341</td>
<td>5.93842</td>
<td>9.19938</td>
<td>0</td>
<td>2</td>
<td>4</td>
<td>6</td>
<td>63</td>
</tr>
<tr>
<td>19</td>
<td>296</td>
<td>5.09459</td>
<td>5.20083</td>
<td>0</td>
<td>2</td>
<td>4</td>
<td>7</td>
<td>62</td>
</tr>
<tr>
<td>20</td>
<td>312</td>
<td>3.40064</td>
<td>2.3455</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>5</td>
<td>15</td>
</tr>
<tr>
<td>21</td>
<td>143</td>
<td>3.41958</td>
<td>2.31472</td>
<td>0</td>
<td>2</td>
<td>3</td>
<td>4.5</td>
<td>12</td>
</tr>
</tbody>
</table>
</center>

<div class="plots">
    <img src="/images/post_img/2020-04-07-report/line_hourly.png" alt="Lineplot_hourly" class="center">
</div>

<br>

### B. Daily Trends

<b>Observations</b>:

* The busiest day was on Wednesday, January 13th, with 679 total swimmers.

<br>

### C. Monthly Trends

<b> Bar Chart of the Sum of Monthly Patronage (Swimmers) per program and total, Bakar Indoor Pool 2019</b>
<br><br>
<div>
    <a href="https://plotly.com/~HP-Nunes/239/?share_key=wSXJcu3k9CrLHjIHEyppyR" target="_blank" title="monthly_tally" style="display: block; text-align: center;"><img src="https://plotly.com/~HP-Nunes/239.png?share_key=wSXJcu3k9CrLHjIHEyppyR" alt="monthly_tally" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="HP-Nunes:239" sharekey-plotly="wSXJcu3k9CrLHjIHEyppyR" src="https://plotly.com/embed.js" async></script>
</div>

<div class="plots">
    <img src="/images/post_img/2020-04-07-report/boxplot2.png" alt="Boxplot_monthly" class="center">
</div>

<br>

### D. Weekdays Vs. Weekends

<b>Observations</b>:
<ul type = "circle"> 
<li>On average, the busiest time at the Indoor Pool is on a Weekend between 4 to 5 pm, coinciding with Family Swim programming.</li>
</ul>
<br><br>
<b>Daily Attendance Compared between Weekdays and Weekends, Bakar Indoor Pool 2019</b>
<br><br>
<div>
    <a href="https://plotly.com/~HP-Nunes/198/?share_key=APJskrONpsmeyRUCzQhC6o" target="_blank" title="bar_count2" style="display: block; text-align: center;"><img src="https://plotly.com/~HP-Nunes/198.png?share_key=APJskrONpsmeyRUCzQhC6o" alt="bar_count2" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="HP-Nunes:198" sharekey-plotly="APJskrONpsmeyRUCzQhC6o" src="https://plotly.com/embed.js" async></script>
</div>

<div class="plots">
    <img src="/images/post_img/2020-04-07-report/line_hourly_comparison.png" alt="Lineplot_comparison" class="center">
</div>

<br>

### E. Categorical Observations

<b>Observations</b>:

* On average, lap swim consists of 4 swimmers.

<br>
<b> Histogram of the Sum of Daily Patronage (Swimmers) per program and total, Bakar Indoor Pool 2019</b>
<div>
    <a href="https://plotly.com/~HP-Nunes/243/?share_key=vsJKrphRVSkOwJ9lODUPxC" target="_blank" title="pie" style="display: block; text-align: center;"><img src="https://plotly.com/~HP-Nunes/243.png?share_key=vsJKrphRVSkOwJ9lODUPxC" alt="pie" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="HP-Nunes:243" sharekey-plotly="vsJKrphRVSkOwJ9lODUPxC" src="https://plotly.com/embed.js" async></script>
</div>

<br>
<a name="analysis1"></a>
## 4. Analysis

### The Ask: Compare weekend patronage between periods with and without lessons, between the time of 8am to 1pm. Make note of holidays and if it had a noticeable effect on attendance.
<br>
<b>Note</b>: Periods in which <em>no lessons</em> occured were based-off handwritten annotation on the tally sheets. If there were no notes on the tally sheets indicating otherwise, it was then assumed that lessons did occur. 

Noted periods indicating 'no lessons' occured from:
* December 31st, 2018 to January 13th, 2019;
* March 25th to April 7th;
* June 10th to June 16th;
* July 8th to July 14th;
* August 26th to September 1st;
* September 23rd to September 28th;
* November 25th to December 7th;
* December 30th to January 5th, 2020.

<div>
    <a href="https://plotly.com/~HP-Nunes/212/?share_key=ChCzd67GvUPrp1Lsgtp7Zn" target="_blank" title="WeekCompare" style="display: block; text-align: center;"><img src="https://plotly.com/~HP-Nunes/212.png?share_key=ChCzd67GvUPrp1Lsgtp7Zn" alt="WeekCompare" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="HP-Nunes:212" sharekey-plotly="ChCzd67GvUPrp1Lsgtp7Zn" src="https://plotly.com/embed.js" async></script>
</div>

<b>Observations</b>:
* There were <b>5,686</b> patrons over the course of 2019 on weekends with Lessons, compared to <b>1,056</b> on those with none. That's a comparison of approximately <b>76 swimmers per day to 59 between weekends with and without lessons</b>.
* There were 484 tallies taken over the course of 75 days in 2019 on weekends with Lessons, compared to 147 tallies over 18 days on those with none. <b>That's approximately 6 tallies taken compared to approximately 8 between weekends with and without lessons</b> (a maximum of 10 tallies can be taken between 8am - 1pm).
* Only one facility holiday fell on a Weekend for 2019: Cesar Chavez Day on Sunday March 31st.

<b>To Do</b>:
* Explore if weekends are an explanatory variable to fluctuations in patronage.
