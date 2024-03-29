const CronJob = require('cron').CronJob;

console.log('Before job instantiation');
const job3 = new CronJob(
  '*/2 * * * * *', async () => {
    if (job3.taskRunning) {
      console.log("wait for it...");
      return
    }

    try {
      //run longer task here
      await setTimeout(() => {
        const d = new Date();
        console.log('JOB 3 - ', d);
        job3.taskRunning = false
      }, 6000);
    } catch (err) {
      console.log(err);
    }
    job3.taskRunning = true
  }
)
console.log('After job instantiation');
job3.start();