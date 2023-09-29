document.getElementById('deposit-button').addEventListener('click',function(){
      /*step 01 */
      const depositFiled = document.getElementById('deposit-filed');
      const newDepositAmountString =depositFiled.value;
      newDepositAmount = parseFloat(newDepositAmountString);
       /* last step */
       depositFiled.value='';
      /** step 08 */
      if(isNaN(newDepositAmount)){
            alert('pLase provide a valid number ');
            return
      }

      /*step 03 */
      const totalDepositElement = document.getElementById('total-deposit');
      const previousTotalDepositString =totalDepositElement.innerText;
      const previousTotalDeposit = parseFloat(previousTotalDepositString);

       /*step 04 */
       currentDepositAmount = previousTotalDeposit +  newDepositAmount ;
       totalDepositElement.innerText = currentDepositAmount;
 
       /** step 05 */
       const totalBalanceElement =document.getElementById('total-balance');
       const totalBalanceStaring = totalBalanceElement.innerText;
       const totalBalance = parseFloat(totalBalanceStaring)
 
       
       /*step 06*/
       const totalBalanceAmount = totalBalance + newDepositAmount;
       totalBalanceElement.innerText = totalBalanceAmount;


      /* last step */
      depositFiled.value='';
})