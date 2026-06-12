# CONFigureSCSToolsSPOintDEFine

Module: SCST
Source: ee859e0d4f584993.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Synchronization Point
 > 
Command Reference
 > 
CONFigure:SCSTools:SPOint:DEFine
CONFigure:SCSTools:SPOint:DEFine 
<Name>, <Timeout>, <PollingInterval>, <Count>, <SingleTask>[, <Scope>]
CONFigure:SCSTools:SPOint:DEFine? 
<Name>
Creates a synchronization point or reactivates a synchronization point after a timeout.
You cannot modify the name or scope of an existing synchronization point. To modify these settings, undefine the synchronization point and define a new synchronization point with the desired settings.
You can modify the other settings if no process has joined the synchronization point.
If you try to define an existing synchronization point again with the same settings, the command is ignored. So you can use the same script several times in parallel.
The indicated ranges apply to setting commands. A query can also return 
INV,INV,INV,INV,INV
. This reply indicates that a synchronization point with the entered name does not exist.
Parameters:
<Timeout>
Maximum time that the synchronization point waits for processes to join after the first process has joined
Range: 
1 ms  to  300E+3 ms
Default unit: 
ms (no unit suffix allowed)
<PollingInterval>
Maximum waiting time for the command 
CONFigure:
​
SCSTools:
​
SPOint:
​
WAIT?
Range: 
0 ms  to  300E+3 ms
Default unit: 
ms (no unit suffix allowed)
<Count>
Expected number of processes to join the synchronization point
When the first process joins, a timer is started. The expected number of processes must join the synchronization point within the defined <Timeout>.
Range: 
2  to  100
<SingleTask>
FSTask |
 
 LSTask |
 
 NSTask
Defines whether and which process must execute a single task.
FSTask
Execution by first joining process
LSTask
Execution by last joining process
NSTask
No single task execution
<Scope>
GLOBal |
 
 INSTrument
Optional parameter with default value INSTrument. Defines the validity area of the synchronization point.
GLOBal
The synchronization point is valid in all subinstruments of the instrument. If it is locked, it is locked in all subinstruments.
INSTrument
The synchronization point is only valid in the addressed subinstrument. You can create a synchronization point with the same name in another subinstrument. But the two synchronization points are independent.
Parameters for setting and query: 
<Name>
String with the user-defined name of the synchronization point to be created or queried. The name is unique within the defined <Scope>.
Firmware/Software: 
V3.5.10
Top