# CONFigureSCSToolsVARiableDEFine

Module: SCST
Source: 3cf0808eb8c949ff.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Variables
 > 
Command Reference
 > 
CONFigure:SCSTools:VARiable:DEFine
CONFigure:SCSTools:VARiable:DEFine 
<Name>[, <StartValue>[, <Scope>]]
CONFigure:SCSTools:VARiable:DEFine? 
<Name>
Creates a variable.
You cannot create the variable "SinceLastBoot".
You cannot modify the name or scope of an existing variable. To modify these settings, undefine the variable and define a new variable with the desired settings.
If you try to define an existing variable again with the same scope and start value, the command is ignored.
If you try to define an existing variable again with the same scope but a different start value, the new start value is applied. The current value and the reset value of the variable are changed.
The described parameters apply to setting commands. A query can also return 
INV, INV
. This reply indicates that a variable with the entered name does not exist.
Parameters:
<StartValue>
The start value defines the initial value and the reset value of the variable. Only integer values are allowed.
If you omit the setting, the start value 0 is set.
<Scope>
GLOBal |
 
 INSTrument
Optional parameter with default value INSTrument. Defines the validity area of the variable.
GLOBal
The variable is valid in all subinstruments of the instrument.
INSTrument
The variable is only valid in the addressed subinstrument. You can create a variable with the same name in another subinstrument. But the two variables are independent.
Parameters for setting and query: 
<Name>
String with the user-defined name of the variable to be created or queried. The name is unique within the defined <Scope>.
Firmware/Software: 
V3.7.10
Top