# CONFigureDATAMEASiIPANalysisIPConnectFILTerEXTension

Module: Data Application Unit
Source: dea912b8d8af4483.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Flow Filter
 > 
CONFigure:DATA:MEAS<i>:IPANalysis:IPConnect:FILTer:EXTension
CONFigure:DATA:MEAS<i>:IPANalysis:IPConnect:FILTer:EXTension 
<Filter1OnOff>, <Filter1Type>, <Filter1String>[, <Filter2OnOff>, <Filter2Type>, <Filter2String>[, <Filter3OnOff>, <Filter3Type>, <Filter3String>[, <Filter4OnOff>, <Filter4Type>, <Filter4String>]]]
Configures a flow filter for IP analysis results. For views supporting the filter, the evaluated set of flows is restricted according to the filter settings. The filter combines all enabled filter lines via AND.
You can configure up to four filter lines. If you skip setting parameters, the related filter lines are not modified. A query returns all parameters, including the optional ones.
Parameters:
<Filter1OnOff>
OFF |
 
 ON
ON
: filter line 1 enabled
OFF
: filter line 1 disabled
*RST:
OFF
<Filter1Type>
FLOWid |
 
 IPADd |
 
 L4PR |
 
 L7PRotocol |
 
 APPL |
 
 CTRY |
 
 SRCP |
 
 DSTP
Selects the property to be checked by filter line 1.
FLOWid
: flow IDs
IPADd
: IP addresses
L4PR
: L4 protocol
L7PRotocol
: L7 protocol
APPL
: application
CTRY
: country
SRCP
: source port
DSTP
: destination port
*RST:
FLOW
<Filter1String>
Single string, containing all filter criteria for filter line 1.
For rules, see 
"Filter expressions"
.
<Filter2OnOff>
OFF |
 
 ON
ON
: filter line 2 enabled
OFF
: filter line 2 disabled
*RST:
OFF
<Filter2Type>
FLOWid |
 
 IPADd |
 
 L4PR |
 
 L7PRotocol |
 
 APPL |
 
 CTRY |
 
 SRCP |
 
 DSTP
Selects the property to be checked by filter line 2.
*RST:
FLOW
<Filter2String>
Single string, containing all filter criteria for filter line 2.
<Filter3OnOff>
OFF |
 
 ON
ON
: filter line 3 enabled
OFF
: filter line 3 disabled
*RST:
OFF
<Filter3Type>
FLOWid |
 
 IPADd |
 
 L4PR |
 
 L7PRotocol |
 
 APPL |
 
 CTRY |
 
 SRCP |
 
 DSTP
Selects the property to be checked by filter line 3.
*RST:
FLOW
<Filter3String>
Single string, containing all filter criteria for filter line 3.
<Filter4OnOff>
OFF |
 
 ON
ON
: filter line 4 enabled
OFF
: filter line 4 disabled
*RST:
OFF
<Filter4Type>
FLOWid |
 
 IPADd |
 
 L4PR |
 
 L7PRotocol |
 
 APPL |
 
 CTRY |
 
 SRCP |
 
 DSTP
Selects the property to be checked by filter line 4.
*RST:
FLOW
<Filter4String>
Single string, containing all filter criteria for filter line 4.
Example: 
See 
"Performing IP Analysis"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KM051
Country information is only available with R&S CMW-KM052.
Manual operation: 
See 
"Configuring the filter"
Top