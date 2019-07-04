<template>
    <div class="result">
      <h1>Here's the results!</h1>
      <md-tabs :md-active-tab="tabState">
        <md-tab id="0" md-label="Interests" >
           <bar-chart :chart-data="chartData"></bar-chart>
             <div class="result-overlay">
              <div v-for="(bar, index) in bars"  @click="onSelectSkill(bar, index)" class="result-overlay-bar"></div>
            </div>
        </md-tab>
        <md-tab id="1" md-label="Occupations" >
           <bar-chart :chart-data="occuData" ></bar-chart>
            <div class="result-overlay">
              <div v-for="(bar, index) in occuData.labels"  @click="onSelectOccupation(bar, index)" class="result-overlay-bar"></div>
            </div>
        </md-tab>
        <md-tab id="2" md-label="Posts" >
            <p class="occu-header">{{ selectedOccupation }}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <result-item :results="occupations"></result-item>
        </md-tab>
         <md-tab id="3" md-label="Jobs" >
            <div class="probability">
             Probability of finding a job {{openings.probability}}
            </div>
            <p v-for="job in openings.occupations">
              <b class="md-list-item-text">{{job.heading}}</b>
              <span class="block">{{job.descr}}</span>
            </p>
        </md-tab>
      </md-tabs>
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs';
    import ResultItem from '@/components/ResultItem';
    import {getOccupationByCompetence, getSkillsByOccupation, getOccupanciesAndProbability} from '../../data_api'
    const fieldsOfInterest = [
        'Agriculture/Food',
        'Animals/Wildlife',
        'Arts/Humanities',
        'Civil Rights',
       'Community development',
        'Crime/Law enforcement',
        'Education',
        'Employment',
        'Environment',
        'Health care',
        'Health organizations',
        'Housing/Shelter',
        'Human services',
        'International affairs',
        'International giving',
        'Medical research',
        'Mental health/Crisis',
        'Services',
        'Mutual aid societies',
        'Population groups',
        'Public affairs',
        'Recreation',
        'Religion',
        'Safety/disasters',
        'Science',
        'Social sciences',
        'Unknown/not classified',
        'Youth development'
    ];

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const chart = {
          labels: shuffle(fieldsOfInterest).slice(0,4),
          datasets: [
              {
                  label: '',
                  backgroundColor: '#f87979',
                  data: [12, 20, 39, 40].reverse(),
                    backgroundColor: '#FBE86F',
              }
        ]
    };

    export default {
        name: 'Result',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                chartData: chart,
                bars: [12, 20, 39, 40].reverse(),
                isDetails: false,
                occupation: {
                  name: 'foobar'
                },
                occupations: [],
                occupationsList: [],
                tabState: 0,
                occuData: {},
                selectedOccupation: '',
                openings: {
                  list:[],
                  probability:''
                }
            };
        },
        methods: {
          onSelectSkill(amount, index){
           const skill = this.chartData.labels[index];
            getOccupationByCompetence(skill)
              .then(occupationsList => {
                   const occupations =  occupationsList.slice(0,4);
                   this.tabState = '1'
                   this.occupationsList = occupations
                    const occuData = occupations.map( () => Math.floor(Math.random() * 20) );
                    const occuChart = {
                        labels: occupations,
                        datasets: [
                            {
                                label: '',
                                backgroundColor: '#f87979',
                                data: occuData.sort().reverse(),
                                backgroundColor: '#FBE86F',
                            }
                        ]
                    };
                    this.occuData = occuChart;
                   console.log(this.occupationsList)

              })

          },
           onSelectOccupation(amount, index){
            const occupation = this.occuData.labels[index];
                this.selectedOccupation = occupation.split(' ').map( w => w.charAt(0).toUpperCase() + w.slice(1) ).join(' ');
                getSkillsByOccupation(occupation)
                .then(skills => {
                    console.log('skillz', skills);
                    this.tabState = '2';
                    this.occupations = [
                        {
                            title: 'Demand',
                            children: skills.map( s => { return { title: s }; } )  // just take it, take it and go away
                        },
                        {
                            title: 'Average salary',
                            children: [
                                {
                                    title: 'Billions!!!'
                                }
                            ]
                        },
                        {
                            title: 'Length of studies',
                            children: [
                                {
                                    title: 'Not that long'
                                }
                            ]
                        },
                        {
                            title: 'What to study',
                            children: [
                                {
                                    title: 'What ever this app tells you to'
                                }
                            ]
                        },
                        {
                            title: 'Where to study',
                            children: [
                                {
                                    title: 'School, life... go for it'
                                }
                            ]
                        },
                        {
                            title: '5 year plan',
                            children: [
                                {
                                    title: 'Go to school'
                                },
                                {
                                    title: 'Graduate'
                                },
                                {
                                    title: '???'
                                },
                                {
                                    title: 'Profit'
                                },
                            ]
                        },
                    ]
                    const city = (window.store.get('user.city') || 'helsinki').toLowerCase()
                    getOccupanciesAndProbability(city, [occupation].concat(this.occupationsList.filter(o => o !== occupation)) )
                      .then(res => {

                        this.openings = res;
                        console.log(this.openings)
                      })
                    // this.occupations = skills.map( s => { return { title: s }; });  // nöyp
                    // console.log('occus', this.occupations);
                    // const occupations = [{ title: 'asdasd' }]
                    // this.$set(this, 'occupations', occupations);
                })

          },
        },
        components: {
          ResultItem
        },
        mounted(){
//          store.listen('occupations', occupations => this.occupations = occupations)

          window.setTabState = n => this.tabState = n
        }
    }
</script>

<style scoped lang="scss">
 .result{
   &-overlay{
         position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
   // padding: 4rem 0 2rem;
     &-bar{
       height: 100%;

    margin: 1rem 0;
        width: 100%;
     }
   }
 }
  .occu-header {
        font-size: 24px;
    }
    .block {
      margin: 1rem 0;
    }
/*  .md-tab{
   height: 100vh!important;
 } */
</style>


<!--



        <div class="result-overlay">
          <div v-for="(bar, index) in bars"  @click="onClick(index)" class="result-overlay-bar"></div>
        </div>
      <ResultModal v-bind:is-visible="isDetails" :onClose="closeDetails">
        <h1>{{occupation.name}}</h1>
        <h3 class="occupation-skills">Skills</h3>
        <md-list>
          <md-list-item v-for="skill in skills" slot="md-expand">
            <span class="md-list-item-text">{{skill}}</span>
          </md-list-item>
        </md-list>
      </ResultModal>

-->
