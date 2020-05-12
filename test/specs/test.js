describe('first test',function(){
    it('first case',async function(){

    
        await browser.url('https://acquire.qa.altusplatform.com/');
        await browser.pause(15000);
        let userName = await $("//input[@name='username']");
        let password = await $("//input[@name='password']");
        let loginButton = $("//input[@type='submit']");
        //browser.driver.manage().window().maximize();
        //browser.wait(until.presenceOf(userName), 80000, 'Element taking too long to appear in the DOM');
        await userName.setValue('santosh+admina2180919031844@argusexpresstest.com');
        await password.setValue('Acquire123$');
    
    
})
        


})