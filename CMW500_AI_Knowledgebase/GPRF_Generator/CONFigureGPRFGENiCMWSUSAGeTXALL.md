# CONFigureGPRFGENiCMWSUSAGeTXALL

Module: GPRF Generator
Source: b31155c258e94aab.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
Scenario Selection and Signal Routing
 > 
CONFigure:GPRF:GEN<i>:CMWS:USAGe:TX:ALL
CONFigure:GPRF:GEN<i>:CMWS:USAGe:TX:ALL 
<TXConnectorBENCH>, <Usage>...
CONFigure:GPRF:GEN<i>:CMWS:USAGe:TX:ALL? 
<TXConnectorBENCH>
Activates or deactivates the individual RF connectors of a connector bench.
For possible bench values, see 
"Values for Signal Path Selection"
.
Parameters:
<Usage>
OFF |
 
 ON
Comma-separated list of 4 or 8 values, one for each connector of the bench
ON
: activate the connector
OFF
: deactivate the connector
Parameters for setting and query: 
<TXConnectorBENCH>
Selects a bench with 4 or 8 connectors
Example: 
See 
"Generating a CW Signal"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Connectors"
Top