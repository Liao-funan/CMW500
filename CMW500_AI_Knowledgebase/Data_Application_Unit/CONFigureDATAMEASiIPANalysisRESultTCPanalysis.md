# CONFigureDATAMEASiIPANalysisRESultTCPanalysis

Module: Data Application Unit
Source: 8d70910f90dc494e.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Enabling Results and Views
 > 
CONFigure:DATA:MEAS<i>:IPANalysis:RESult:TCPanalysis
CONFigure:DATA:MEAS<i>:IPANalysis:RESult:TCPanalysis 
<Enable>
CONFigure:DATA:MEAS<i>:IPANalysis:RESult:IPConnect 
<Enable>
CONFigure:DATA:MEAS<i>:IPANalysis:RESult:DPCP 
<Enable>
CONFigure:DATA:MEAS<i>:IPANalysis:RESult:VOIMs 
<Enable>
CONFigure:DATA:MEAS<i>:IPANalysis:RESult:IPCS 
<Enable>
CONFigure:DATA:MEAS<i>:IPANalysis:RESult:FTTRigger 
<Enable>
Enables or disables the display of the individual detailed views and the evaluation of the related results.
The mnemonic after "RESult" denotes the view: "TCP Analysis", "IP Connectivity", "Data Pie Charts", "Voice over IMS", "IP Connection Security" and "Flow Throughput and Event Trigger".
Parameters:
<Enable>
OFF |
 
 ON
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
ON
Firmware/Software: 
V3.2.11
V3.2.40: added 
...:RESult:VOIMs
V3.7.11: added 
...:RESult:IPCS
Options: 
R&S CMW-KM051
R&S CMW-KM052 for IPCS
Manual operation: 
See 
"Disabling views / Assign View hotkey"
Top