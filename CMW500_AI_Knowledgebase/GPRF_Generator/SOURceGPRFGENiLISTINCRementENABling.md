# SOURceGPRFGENiLISTINCRementENABling

Module: GPRF Generator
Source: 7c592fb496a145e5.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:INCRement:ENABling
SOURce:GPRF:GEN<i>:LIST:INCRement:ENABling 
<Enabling>
For an internally incremented list, this command defines the initial trigger.
Internally incremented list means "List Increment: GPRF Gen<i>: ... Marker ..." or "List Increment: Dwell Time", see 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
INCRement
.
Parameters:
<Enabling>
String parameter specifying the initial trigger
To generate a complete list of all supported triggers, see 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
INCRement:
​
ENABling:
​
CATalog?
.
'Immediate'
: No initial trigger; list increment starts immediately
'Manual'
: Waits until 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
SLISt
 is executed
'<meas trigger>'
 (e.g. "GPRF Meas<i>: Power" or "GSM Meas<i>: Multi Evaluation"): Some measurement application provides the initial trigger
Example: 
See 
"Using the Arbitrary Mode"
Firmware/Software: 
V1.0.10.1, V3.2.10: 'Manual' added
Manual operation: 
See 
"List Incr. Enabling"
Top