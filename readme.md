## Running on local machine
Follow below steps to run after downloading complete folder 'Playwright-QE'
1. Navigate to root folder 'Playwright-QE' and open terminal
2. Run command 'npm install'
3. Once above command complete installation of required modules run 'npx playwright test --headed'
4. Now we will tests are executing on Chromium browser (default)
5. Once execution complete, run 'npx playwright show-report' to see report
6. Step 5 will open default system browser and load execution report with each step status with execution time.

### Improvements
1. We can added customised reposting like Allure reporting, which will enhance reporting further
2. We can integrate each CICD test runs by adding unique test codes to each test. And integrate test management tools like Testrail
3. We can make shift this framework in Dev project as multi project, so Dev and tests in one project and can be maintained by Dev/QA as real CICD.
4. Framework can be extended to test email/custom communication validations with third party tools like mailosaur 

NOTE: This framework is IDE agnostic, can be loaded in any IDE and playaround it.