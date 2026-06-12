# CONFigureGPRFMEASiPOWerLISTIREPetitionALL

Module: GPRF Measurements
Source: d60c2d949e5248da.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:IREPetition:ALL
CONFigure:GPRF:MEAS<i>:POWer:LIST:IREPetition:ALL 
<Repetition>...
Sets/gets the individual number of repetitions of all list segments.
Parameters:
<Repetition>
List of n comma-separated values, one per list segment, where n 
≤
 2000. The query returns 2000 results.
Range: 
1  to  10000
Increment: 
The total number of results (segments with repetitions) in the selected list section must not be higher than 10000.
*RST:
1
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"List > Index Rep."
Top