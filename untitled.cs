    /* prime number*/



using System;
using System.Collections.Generic;

// To execute C#, please define "static void Main" on a class
// named Solution.

class Solution
{
    static void Main(string[] args)
    {
       //calling the method and passing the range till 100
        listPrimeNum(100);
        //calling the test method
        checkPrime();
    

        
    }
    
    // method to select prime number
    public static string listPrimeNum(int range1){
        //instansiating a list to add the prime numbers to
     List <int> primeNos = new List<int>();
    //looping thru 2 to 100 
        for (int i = 2; i< range1; i++){
            //setting a counter isPrime to zero
         int isPrime = 0;
    //looping thru to determine if it divisivble by any number between itself and 1
           for (int j = 1; j < i; j++){
    // condition true if quotient is zero
             if (i%j == 0)
    // incrementing isPrime 
                 isPrime++;
    // if isPrime is 2 break out of this loop
               if (isPrime == 2) break;
           
           }
    // if isPrime is not 2 and i%j!= 0 then number is prime
           if(isPrime !=2){
            Console.WriteLine(i);
    // storing the prime numbers to the list<int>
            primeNos.Add(i);
    //reseting isPrime to zero 
            isPrime=0;
           }
        
       }
        string arr = "";
    //looping thru the list<int> and adding the elements to string array arr
             foreach(int i in primeNos){
    //concantenating the array separating the numbers with ','
               arr = arr+i+",";             
             }
    // removing the last ','    
        arr = arr.Remove(arr.Length-1);
        Console.WriteLine(arr);
    
         return arr;


    }
    public static void checkPrime(){
        // calling the method and saving the result in a string
       string test1 = listPrimeNum(10);
        // storing the expected result in a string
        string actual = "2,3,5,7";
        //checking the result with actual expected result
        if(test1 == actual){
        Console.WriteLine("pass");
        }
        else{
        Console.WriteLine("fail");
        
        }
    
    }
    
    
    
}
***************************************************




        *************************************************
/* convert the number into digit array*/
using System;
using System.Collections.Generic;
class MainClass {
  public static void Main (string[] args) {
      intToArray(12345);
      testArray();

  }
  
    public static string intToArray(int num) {
    var result = new List<int>();
    while (num != 0) {
        result.Insert(0, num % 10);
        num = num / 10;
    }
    int[] i = result.ToArray();
    string arr = string.Join(",", i);
    arr = ("{"+ arr +"}");
    Console.WriteLine(arr);
    return arr;
    }
    
    public static void testArray(){
      string arr1 = intToArray(45678);
      if (arr1 == "{4,5,6,7,8}"){
        Console.WriteLine("pass");
      
      }
      else{
        Console.WriteLine("fail");
      }
      
    }

}
***********************************************

/* reverse the sentence*/
using System;
using System.Collections.Generic;

// To execute C#, please define "static void Main" on a class
// named Solution.

class Solution
{
    static void Main(string[] args)
    {
   
        reverseStr("The red hat belongs to John");
        reverseStrTest();
 
    }
          //main metod to reverse the string 
        public static string reverseStr(string str){
            //printing the real string
            Console.WriteLine(str);
            //splitting the string at spaces
            string [] a = str.Split(' ');
            //instantiating new string to empty
            string b = "";
            //assigning a int to the last index of the array a
            int len = a.Length - 1;
            // looping thru a starting from the last element 
            for(int i = len; i >= 0; i--)
            {
                //adding elements to b starting with last element first
                  b = b + a[i]+ " ";
            }
           //printing the final result
            Console.WriteLine(b);
            //returning the final result to be checked
            return b;
               
        }
    
    
       // test method
        public static bool reverseStrTest(){
       // calling the reverse method
        string c = reverseStr("I am Coder ");
       //new string with the actual result or expected result
        string d = "Coder am I";
            
        // trimming the result from reverse method
        string e = c.Trim();
        // coomparing the results        
        if (d == e)
        { 
            Console.WriteLine("pass");
            return true;
        }
        else{
            Console.WriteLine("fail");
            return false;

        }
    }
}

      