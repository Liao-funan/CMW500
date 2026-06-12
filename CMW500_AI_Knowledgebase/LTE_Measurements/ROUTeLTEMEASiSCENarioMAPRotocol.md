# ROUTeLTEMEASiSCENarioMAPRotocol

Module: LTE Measurements
Source: 016638aa291c4d77.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
ROUTe:LTE:MEAS<i>:SCENario:MAPRotocol
ROUTe:LTE:MEAS<i>:SCENario:MAPRotocol 
[<Controler>]
Activates the Measure@ProtocolTest scenario and optionally selects the controlling protocol test application.
The signal routing and analyzer settings are ignored by the measurement application. Configure the corresponding settings within the protocol test application used in parallel.
Setting parameters: 
<Controler>
String parameter selecting the protocol test application
Example: 
'Protocol Test1'
Usage: 
Event
Firmware/Software: 
V1.0.15.20
V2.1.25: added <Controler>
Manual operation: 
See 
"Scenario = Measure@ProtocolTest"
Top