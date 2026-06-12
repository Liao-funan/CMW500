# Variables

Module: SCST
Source: a77b06feb7f64d59.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Variables
Variables
This section describes remote commands for integer variables.
When you define a variable, you give it a name. This name is used by all other 
VARiable
 commands to identify the variable.
A variable can be valid and visible within the entire instrument with all its subinstruments, or within a single subinstrument only. This area is called the scope. The name is unique within its scope.
Each user-defined variable has a configurable reset value, which is also used as initial value of the variable.
The following actions are possible via the 
VARiable
 commands:
Create a variable and define its scope and reset value/initial value.
Change the reset value of a variable (changes also the current value).
Increment or decrement the value of a variable (and optionally query the new value).
Query the value of a variable.
Set variables to their reset value.
Delete variables.
Query a list of all existing variables.
Predefined variables
After a startup or reboot, there are no user-defined variables.
But the following variable is created automatically:
Variable name "SinceLastBoot", start value 0, scope global
You cannot redefine a predefined variable, delete it or change its reset value. But you can modify, reset and query the value of predefined variables.
Contents
Command Reference
Top