const CronJob = require('cron').CronJob;

console.log('Before job instantiation');
const job1 = new CronJob('*/10 * * * * *', function () {
    const d = new Date();
    console.log('JOB 1 - ', d);
});
const job2 = new CronJob('*/3 * * * * *', function () {
    const d = new Date();
    setTimeout(() => {
        console.log('JOB 2 - ', d);
    }, 10000);
});

console.log('After job instantiation');
job1.start();
job2.start();
