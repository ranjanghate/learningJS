/*
  Javascript Runtime Environment = JS engine + Web APIS + callback queue + microtask queue + event loop + (many more)

  JS engine is not a hardware machine it is a program written in C++.

  JS engine architecture
  Code input (takes code as input) after that
  step - 1) Parsing
  step -2) Compilation
  step -3) Execution

  1) PARSING (https://astexplorer.net/)
    the written code is broken down into TOKENS.
    // let a = 7 (here 'let', 'a', '=' and '7' are the tokens)
    SYNTAX PARSER :- it takes the code and break it down into AST(abstract syntax tree).
    now genrate AST will be passed into the compilation phase.
  
  2) COMPILATION
    JIT (just in time) compilation
    INTERPRETER VS COMPILER
    Interpreter :- It takes the code and it start executing the code line by line.
    Compiler :- It takes the whole code and it compiles the code before execution. After compilation
                it forms optimized version of code and then execute the code.
    
    Interpreter is faster than compiler while compiler is more efficient than interpreter.

   ****Javascript can behave like interpreted language as well as compile language.It depends on the engine****

    after parsing AST will go into interpreter and interpreter converts the high level code into the byte code and the code moves
    to the execution step.And interpreter is convert the high level code into byte code it takes the help of compiler to optimize the code 
    as much as it can. So the job of compiler is to optimize the code as much it can on the runtime, that is why it is known as
    JUST IN TIME COMPILATION.

  3) EXECUTION
    It uses two main components MEMORY HEAP and CALL STACK.
    MEMORY HEAP is the space where all the variables and functions are assign memory.And it is constantly in sync with callstack, grabage collector
    and lot of other things.

    Garbage collector sweeps the unused or not usable memory from the memory heap using mark & sweep algorithm.


    TO DO:-
    1.Mark and Sweep
    2.Inling
    3.Copy Elision
    4.Inline Caching
*/
