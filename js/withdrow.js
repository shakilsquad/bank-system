document.getElementById('withdraw-button').addEventListener('click',function(){
      /*step 01 */
      const depositFiled = document.getElementById('withdraw-field');
      const newDepositAmountString =depositFiled.value;
      newDepositAmount = parseFloat(newDepositAmountString);
       /* last step */
       depositFiled.value='';
      /** step 08 */
      if(isNaN(newDepositAmount)){
            alert('pLase valid a valid number ');
            return
      }
      /*step 03 */
      const totalDepositElement = document.getElementById('total-withdraw');
      const previousTotalDepositString =totalDepositElement.innerText;
      const previousTotalDeposit = parseFloat(previousTotalDepositString);

  
 
       /** step 05 */
       const totalBalanceElement =document.getElementById('total-balance');
       const totalBalanceStaring = totalBalanceElement.innerText;
       const totalBalance = parseFloat(totalBalanceStaring)
       
     
      /** step 07 */
      if(  newDepositAmount > totalBalance ){
            alert('Nota a amount , PLase right amount')
            return
      }
           /*step 04 */
           currentDepositAmount = previousTotalDeposit +  newDepositAmount ;
           totalDepositElement.innerText = currentDepositAmount;

       /*step 06*/
       const totalBalanceAmount = totalBalance - newDepositAmount;
       totalBalanceElement.innerText = totalBalanceAmount;


})