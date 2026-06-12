# CONFigureDATAMEASiIPANalysisRESult[ALL]

Module: Data Application Unit
Source: 86491a0f35f14646.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Enabling Results and Views
 > 
CONFigure:DATA:MEAS<i>:IPANalysis:RESult[:ALL]
CONFigure:DATA:MEAS<i>:IPANalysis:RESult[:ALL] 
<TCPAnalysis>, <IPConnect>, <DPCP>, <FTTRigger>, <VOIMs>[, <IPCSecurity>]
Enables or disables the display of the individual detailed views and the evaluation of the related results. This command combines all other 
CONFigure:DATA:MEAS<i>:IPANalysis:RESult...
 commands.
Parameters:
<TCPAnalysis>
OFF |
 
 ON
"TCP Analysis" view
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
ON
<IPConnect>
OFF |
 
 ON
"IP Connectivity" view
*RST:
ON
<DPCP>
OFF |
 
 ON
"Data Pie Charts" view
*RST:
ON
<FTTRigger>
OFF |
 
 ON
"Flow Throughput and Event Trigger" view
*RST:
ON
<VOIMs>
OFF |
 
 ON
"Voice over IMS" view
*RST:
ON
<IPCSecurity>
OFF |
 
 ON
"IP Connection Security" view
*RST:
ON
Example: 
See 
"Performing IP Analysis"
Firmware/Software: 
V3.2.11
V3.2.40: added <VOIMs>
V3.5.52: added <IPCSecurity>
Options: 
R&S CMW-KM051, for <IPCSecurity> also R&S CMW-KM052
Manual operation: 
See 
"Disabling views / Assign View hotkey"
Top