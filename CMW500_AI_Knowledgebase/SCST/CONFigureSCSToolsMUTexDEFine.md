# CONFigureSCSToolsMUTexDEFine

Module: SCST
Source: 3113e60dae754804.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Mutex
 > 
Command Reference
 > 
CONFigure:SCSTools:MUTex:DEFine
CONFigure:SCSTools:MUTex:DEFine 
<Name>[, <Scope>]
CONFigure:SCSTools:MUTex:DEFine? 
<Name>
Creates a mutex.
You cannot modify the name or scope of an existing mutex. To modify mutex settings, undefine the mutex and define a new mutex with the desired settings.
If you try to define an existing mutex again with the same scope, the command is ignored. So you can use the same script several times in parallel.
The indicated range applies to setting commands. A query can also return 
INV
. This reply indicates that a mutex with the entered name does not exist.
Parameters:
<Scope>
GLOBal |
 
 INSTrument
Optional parameter with default value INSTrument. Defines the validity area of the mutex.
GLOBal
The mutex is valid in all subinstruments of the instrument. If it is locked, it is locked in all subinstruments.
INSTrument
The mutex is only valid in the addressed subinstrument. You can create a mutex with the same name in another subinstrument. But the two mutexes are independent.
Parameters for setting and query: 
<Name>
String with the user-defined name of the mutex to be created or queried. The name is unique within the defined <Scope>.
Firmware/Software: 
V3.5.10
Top