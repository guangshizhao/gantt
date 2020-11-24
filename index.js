const ganttData1 = [
    {
        name:'七',
        start:'2019-12-15', //任务下达
        end:'2021-05-15', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-12-15', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2020-06-12',// 计划完成时间
                endTime:'2020-06-12', //实际结束时间
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2020-06-12', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2020-10-10',// 计划完成时间
                endTime:'2020-10-10',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
    
            },
            {
                name:'总装总测',
                goes:'2020-10-10', // 开始时间时间
                continue:20, // 持续了多少天
                planEndTime:'2020-12-09',// 计划时间
                endTime:'2020-12-09',
                color:'#894ffa',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
    
            },
            {
                name:'抽检试验',
                goes:'2020-12-09', // 开始时间时间
                continue:0, // 持续了多少天
                planEndTime:'2021-01-08',// 计划时间
                endTime:'2021-01-08',
                color:'#fdb629',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2021-01-08', // 开始时间时间
                continue:0, // 持续了多少天
                planEndTime:'2021-05-09',// 计划交付时间
                endTime:'2021-05-09',
                color:'#3DBD44',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'六',
        start:'2019-10-15', //任务下达
        end:'2021-03-15', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-10-15', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2020-04-12',// 计划完成时间
                endTime:'2020-04-12',
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2020-04-12', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2020-08-10',// 计划完成时间
                endTime:'2020-08-10',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2020-08-10', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-10-10',// 计划时间
                endTime:'2020-10-10',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-10-10', // 开始时间时间
                continue:20, // 持续了多少天
                planEndTime:'2020-11-10',// 计划时间
                endTime:'2020-11-10',
                color:'#fdb629',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-11-10', // 开始时间时间
                continue:0, // 持续了多少天
                planEndTime:'2021-03-10',// 计划交付时间
                endTime:'2021-03-10',
                color:'#3DBD44',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'五',
        start:'2019-08-15', //任务下达
        end:'2021-01-15', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-08-15', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2020-02-10',// 计划完成时间
                endTime:'2020-02-10',
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2020-02-10', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2020-06-10',// 计划完成时间
                endTime:'2020-06-10',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2020-06-10', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-08-10',// 计划时间
                endTime:'2020-08-10',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-08-10', // 开始时间时间
                continue:30, // 持续了多少天
                planEndTime:'2020-09-10',// 计划时间
                endTime:'2020-09-10',
                color:'#fdb629',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-09-10', // 开始时间时间
                continue:50, // 持续了多少天
                planEndTime:'2021-01-10',// 计划交付时间
                endTime:'2021-01-10',
                color:'#3DBD44',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'四',
        start:'2019-06-15', //任务下达
        end:'2020-11-12', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-06-15', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2019-12-12',// 计划完成时间
                endTime:'2019-12-12', //实际完成时间
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2019-12-12', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2020-04-12',// 计划完成时间
                endTime:'2020-04-12',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2020-04-12', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-06-12',// 计划时间
                endTime:'2020-06-12',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-06-12', // 开始时间时间
                continue:30, // 持续了多少天
                planEndTime:'2020-07-12',// 计划时间
                endTime:'2020-07-12',
                color:'#fdb629',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-07-12', // 开始时间时间
                continue:100, // 持续了多少天
                planEndTime:'2020-11-12',// 计划交付时间
                endTime:'2020-11-12',
                color:'#3DBD44',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'三',
        start:'2019-04-15', //任务下达
        end:'2020-09-12', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-04-15', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2019-10-15',// 计划完成时间
                endTime:'2019-10-15',
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2019-10-15', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2020-02-15',// 计划完成时间
                endTime:'2020-02-15',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2020-02-15', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-04-15',// 计划时间
                endTime:'2020-04-15',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-04-15', // 开始时间时间
                continue:30, // 持续了多少天
                planEndTime:'2020-05-15',// 计划时间
                endTime:'2020-05-15',
                color:'#fdb629',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-05-15', // 开始时间时间
                continue:130, // 持续了多少天
                planEndTime:'2020-09-12',// 计划交付时间
                endTime:'2020-09-12',
                color:'#3DBD44',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'二',
        start:'2019-02-15', //任务下达
        end:'2020-07-12', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-02-15', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2019-08-15',// 计划完成时间
                endTime:'2019-08-15',
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2019-08-15', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2019-12-12',// 计划完成时间
                endTime:'2019-12-12',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2019-12-12', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-02-12',// 计划时间
                endTime:'2020-02-12',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-02-12', // 开始时间时间
                continue:30, // 持续了多少天
                planEndTime:'2020-03-12',// 计划时间
                endTime:'2020-03-12',
                color:'#fdb629',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-03-12', // 开始时间时间
                continue:140, // 持续了多少天
                planEndTime:'2020-07-12',// 计划交付时间
                endTime:'2020-07-12',
                color:'#3DBD44',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'一',
        start:'2018-12-15', // 任务下达
        end:'2020-05-12', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2018-12-15', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2019-06-15',// 计划完成时间
                endTime:'2019-06-15',
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2019-06-15', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2019-10-15',// 计划完成时间
                endTime:'2019-10-15',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2019-10-15', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2019-12-15',// 计划时间
                endTime:'2019-12-15',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2019-12-15', // 开始时间时间
                continue:30, // 持续了多少天
                planEndTime:'2020-01-15',// 计划时间
                endTime:'2020-01-15',
                color:'#fdb629',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-01-15', // 开始时间时间
                continue:130, // 持续了多少天
                planEndTime:'2020-05-15',// 计划交付时间
                endTime:'2020-05-15',
                color:'#3DBD44',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
]
const ganttData2 =[
    {
        name:'三',
        start:'2019-12-15', //任务下达
        end:'2021-06-09', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-12-15', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2020-04-12',// 计划完成时间
                endTime:'2020-04-12', //实际结束时间
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2020-04-12', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2020-10-10',// 计划完成时间
                endTime:'2020-10-10',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2020-10-10', // 开始时间时间
                continue:20, // 持续了多少天
                planEndTime:'2020-12-09',// 计划时间
                endTime:'2020-12-09',
                color:'#894ffa',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-12-09', // 开始时间时间
                continue:0, // 持续了多少天
                planEndTime:'2021-02-08',// 计划时间
                endTime:'2021-02-08',
                color:'#fdb629',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2021-02-08', // 开始时间时间
                continue:0, // 持续了多少天
                planEndTime:'2021-06-09',// 计划交付时间
                endTime:'2021-06-09',
                color:'#3DBD44',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'二',
        start:'2019-10-15', //任务下达
        end:'2021-04-10', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-10-15', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2020-02-12',// 计划完成时间
                endTime:'2020-02-12',
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'产品齐套',
                goes:'2020-02-12', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2020-08-10',// 计划完成时间
                endTime:'2020-08-10',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2020-08-10', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-10-10',// 计划时间
                endTime:'2020-10-10',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-10-10', // 开始时间时间
                continue:20, // 持续了多少天
                planEndTime:'2020-12-10',// 计划时间
                endTime:'2020-12-10',
                color:'#fdb629',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-12-10', // 开始时间时间
                continue:0, // 持续了多少天
                planEndTime:'2021-04-10',// 计划交付时间
                endTime:'2021-04-10',
                color:'#3DBD44',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    },
    {
        name:'一',
        start:'2019-08-15', //任务下达
        end:'2021-02-10', // 任务结束
        step:[ //任务下达
            {
                name:'物资齐套',
                goes:'2019-08-15', // 开始时间时间
                continue:120, // 持续了多少天
                planEndTime:'2019-12-10', // 计划完成时间
                endTime:'2019-12-10',
                color:'#67e0e3',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
    
            },
            {
                name:'产品齐套',
                goes:'2019-12-10', // 开始时间时间
                continue:180, // 持续了多少天
                planEndTime:'2020-06-10',// 计划完成时间
                endTime:'2020-06-10',
                color:'#EB8E56',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'总装总测',
                goes:'2020-06-10', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-08-10',// 计划时间
                endTime:'2020-08-10',
                color:'#894ffa',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'抽检试验',
                goes:'2020-08-10', // 开始时间时间
                continue:60, // 持续了多少天
                planEndTime:'2020-10-10',// 计划时间
                endTime:'2020-10-10',
                color:'#fdb629',
                status:true, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            },
            {
                name:'交付',
                goes:'2020-10-10', // 开始时间时间
                continue:20, // 持续了多少天
                planEndTime:'2021-02-10',// 计划交付时间
                endTime:'2021-02-10',
                color:'#3DBD44',
                status:false, // 本道工序是否已完成,用来控制bar底下的三角标和文字是否显示
            }
        ]
    }
]
var arr= new Vue({
    el:'#app',
    data:{
        // 甘特图数据 头部日期数据
        ganttTimeList:[],
        sectionDate:{
            zao:'2018-11-01', // 进度最早开始时间,确认甘特图日期的开始
            wan:'2021-08-01'  // 进度最晚结束时间,确认甘特图日期的结束
        },
        // 甘特图内容数据
        ganttData:ganttData1
    },
    created(){
        this.ganttTime( this.sectionDate.zao,this.sectionDate.wan)  // 最早的开始时间 // 最晚的开始时间
    },
    methods: {
           // 甘特图用
            // 中国标准时间
            // time 类型 是newDate()的 Sun Apr 08 2018 08:00:00 GMT+0800 (中国标准时间) 格式
            format(time) {
                let year = time.getFullYear();  //获取年份。
                let mouth = time.getMonth() + 1;  //获取月份。
                let day = time.getDate(); //获取天
                return {year,mouth,day}
             },
            // 甘特图用
            // start开始时间 end结束时间 最后返回用甘特图日期渲染的数据
            ganttTime(start,end) {
                //获取开始时间和结束时间的时间戳
                var startTime = new Date(start).getTime()
                var endTime = new Date(end).getTime()
                var dateArr = []  // 存放区间的数组  格式为["2020-01-01","2020-01-02"]  可以打印下看看
                var stamp;
                var oneDay = 24 * 60 * 60 * 1000;
                for (stamp = startTime; stamp <= endTime;) {
                    dateArr.push(this.format(new Date(stamp)))
                    stamp += oneDay
                }

                var listArr = [] // 存放转换后的数组  把扁平化的数据转换为 层级结构的

                dateArr.forEach((item, index) => {
                    if(index === 0){
                    listArr.push({
                        year: item.year,
                        mouthArr: [{
                            yearItem: item.year,
                            mouth: item.mouth,
                            dayArr: [item.day]
                        }]
                    })
                }
            else{
                    // 不是第一次,就需要两个数组对比如果有一样的就再对比
                    //some()函数  用于检测数组中的元素是否满足指定条件.
                    // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测
                    var yearFlag = listArr.some((listItem, listIndex) => {
                        // 如果年份相等,就要循环月份数组
                        if(listItem.year == item.year){
                        // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测
                        var mouthFlag = listItem.mouthArr.some((mouthItem, mouthIndex) => {
                            // 如果月份相等,就把天push进去,return true
                            if(mouthItem.mouth == item.mouth){
                            mouthItem.dayArr.push(item.day)
                            return true;
                             }
                        })
                        //  如果月开关是fasle 就代表月份没有一样的 push就行了
                        if (!mouthFlag) {
                            listItem.mouthArr.push({mouth: item.mouth,yearItem: item.year, dayArr: [item.day]})
                        }
                        return true
                    }
                })
                    //  如果年开关是fasle 就代表年份没有一样的 push就行了
                    if (!yearFlag) {
                        // 如果年份不相等,年份数组push
                        listArr.push({
                            year: item.year,
                            mouthArr: [{
                                yearItem: item.year,
                                mouth: item.mouth,
                                dayArr: [item.day]
                            }]
                        })
                    }
                 }
            })
                this.ganttTimeList = listArr
                var ganttSplitLine=[]
                this.ganttTimeList.forEach(function(item,index){
                    item.mouthArr.forEach(function(mouthItem,mouthIndex){
                        ganttSplitLine.push(mouthItem)
                    })
                })
                this.ganttSplitLine = ganttSplitLine
            },
            // 设置甘特图barBox的偏移量,确定本条在甘特图中开始的位置
            ganttBarMargin(item){
                var startTime = this.sectionDate.zao.split('-') // 最早开始时间
                var barStartTime = item.start.split('-') // 本条开始时间

                var oDate = new Date(startTime[0] + '-' + startTime[1] + '-01');
                var barStartDate =  new Date(barStartTime[0] + '-' + barStartTime[1] + '-' + barStartTime[2]);

                var dates = Math.abs((oDate - barStartDate))/(1000*60*60*24); // 偏移量
                //以上是为了算出来 每条距离最早的日期间隔几天 dates是最后的结果

                //  乘2可以理解为 月份每格是60px, 但是间隔天数是按照正常的日期来计算的,所以要乘一定的倍数, 就算出本条barBox在甘特图中开始的位置(margin-left)
                if (dates < 30 ){
                    return dates * 2 + "px"
                }else{
                   var   num  =  dates / 30  // 比方说 隔了60天, 就用60 / 30 = 2,就是两个月 ,每个月的格子60px 就再乘60 就算出本条barBox在甘特图中开始的位置(margin-left)
                         num = num.toFixed(2);
                         num =  parseInt(num * 60);
                    return num + "px"
                }
            },
            //设置甘特图barBox的长度,确定本条在甘特图中结束的位置
            ganttBarWidth(item){
                var barStartTime = item.start.split('-') // 本条开始时间
                var barEndTime = item.end.split('-') // 本条结束时间
                var barStartDate =  new Date(barStartTime[0] + '-' + barStartTime[1] + '-' + barStartTime[2]);
                var barEndDate =  new Date(barEndTime[0] + '-' + barEndTime[1] + '-' + barEndTime[2]);

                var endDates =Math.abs((barEndDate - barStartDate))/(1000*60*60*24)   // 算出来barBox的结束位置
                var  width=  parseInt(endDates / 30 * 60)
                // var  width=  endDates * 2

                // console.log('甘特图长度',endDates,width)

                return width + 'px'
            },
            //设置甘特图每个bar 的class来设置颜色
            ganttBarClass(item,index){
                // 暂时把颜色写到数据里
                return;
                var { name } = item;
                if(name ==='物资齐套') return 'gannt-baritem-wuzi'
                if(name ==='总装总测') return 'gannt-baritem-zong'
                if(name ==='完成交付') return 'gannt-baritem-ok'
            },
            // 设置每个步骤的宽度
            ganttItemBarWidth(item) {
                if (item.continue < 30) {
                    return item.continue * 2 + "px"
                }else{
                    var num  =  item.continue / 30  // 比方说 隔了60天, 就用60 / 30 = 2,就是两个月 ,每个月的格子60px 就再乘60 就算出宽度了
                    num = num.toFixed(2);
                    num =  parseInt(num * 60);
                    return num + "px"
                }
            },
            // 设置计划完成icon的位置
            ganttPlanIconLeft({ start },{ planEndTime }){
                var startTime = start.split('-') // 本条开始时间
                var planTime = planEndTime.split('-') // 某个步骤的预计开始时间

                var startDate =  new Date(startTime[0] + '-' + startTime[1] + '-' + startTime[2]);
                var planStartDate =  new Date(planTime[0] + '-' + planTime[1] + '-' + planTime[2]);

                var left =Math.abs((planStartDate - startDate))/(1000*60*60*24)   // 算出来间隔几天
                if(left <30){

                    return left * 2 + "px"
                }else{
                    var num  = left / 30  // 比方说 隔了60天, 就用60 / 30 = 2,就是两个月 ,每个月的格子60px 就再乘60 就算出宽度了
                    num = num.toFixed(2);
                    num =  parseInt(num * 60);
                    return num  + "px"
                }
            },
            // 设置计划完成icon的color
            ganttPlanIconColor({ name }) {
                // 暂时把颜色写到数据里
                return;
                if (name == '物资齐套') return '#67DFE4'
                if (name == '产品齐套') return '#EB9256'
                if (name == '总装总测') return '#8B50F9'
                if (name == '抽检试验') return '#'
                if (name == '交付') return 'red'
            },
            // 设置甘特图头部的宽度
            // 甘特图bar内容部分也可以用
            ganttHeadWidth(){
              var num =0;
                this.ganttTimeList.forEach((item)=>{
                    num += item.mouthArr.length;
                })
                this.ganttMouthLength = num
                num = num * 60
                return num
            },
              // 给当前月份的背景分割线加上单独的类名,改变颜色
            nowLine(item){
                // 获取当前的年月 , 和item作对比,如果年月相等return true
                var { year,mouth } = this.format(new Date())
                if(item.yearItem == year &&item.mouth ==mouth ){
                    return true
                }
                return false
            },
            handleTab(){
                this.ganttData=ganttData1
            },
            handleTab2(){
                this.ganttData=ganttData2
            }
    },
})