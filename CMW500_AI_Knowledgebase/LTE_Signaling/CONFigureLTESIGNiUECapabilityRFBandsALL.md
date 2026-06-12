# CONFigureLTESIGNiUECapabilityRFBandsALL

Module: LTE Signaling
Source: 9b0c180396d547a6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:UECapability:RFBands:ALL
CONFigure:LTE:SIGN<i>:UECapability:RFBands:ALL 
{<Enable>, <Band>}...
Configures the list of operating bands for the information element "requestedFrequencyBands" of the "ueCapabilityEnquiry" message.
The command has 32 parameters, for 16 entries with two parameters each:
{<Enable>, <Band>}
entry 1
, {<Enable>, <Band>}
entry 2
, ..., {<Enable>, <Band>}
entry 16
Parameters:
<Enable>
OFF |
 
 ON
Disables or enables the entry
*RST:
OFF
<Band>
UDEFined |
 
 OB1 |
 
 ... |
 
 OB45 |
 
 OB46 |
 
 OB48 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB250 |
 
 OB252 |
 
 OB255
Assigns a band to the entry
Example: 
See 
"Configuring General Connection Settings Part 2"
Firmware/Software: 
V3.5.40
Manual operation: 
See 
"Capabilities"
Top