# Retrieve EUT Information and Capabilities

Module: Bluetooth Signaling
Source: bf4d59ae6a9f40ac.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Retrieve EUT Information and Capabilities
Retrieve EUT Information and Capabilities
Connect
// *****************************************************************************
// Set up the ACL link with the page target device, if necessary
// increase/decrease the EUT power via legacy power control. 
// Query the current legacy power control status.
// Query enhanced power control status.
// *****************************************************************************
CALL:BLUetooth:SIGN:CONNection:ACTion CONNect
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "CONN"
CONFigure:BLUetooth:SIGN:CONNection:PCONtrol:STEP:ACTion UP; *OPC?
SENSe:BLUetooth:SIGN:EUT:PCONtrol:STATe:LEGacy?
SENSe:BLUetooth:SIGN:EUT:PCONtrol:STATe:GFSK?
SENSe:BLUetooth:SIGN:EUT:PCONtrol:STATe:DQPSk?
SENSe:BLUetooth:SIGN:EUT:PCONtrol:STATe:DPSK?
SENSe:BLUetooth:SIGN:EUT:PCONtrol:STATe?
Query event log
// *****************************************************************************
// Query and clear the event log.
// *****************************************************************************
SENSe:BLUetooth:SIGN:ELOGging:ALL?
CLEan:BLUetooth:SIGN:ELOGging
Query results
// *****************************************************************************
// Query all EUT information results
// *****************************************************************************
SENSe:BLUetooth:SIGN:EUT:INFormation:NAME?
SENSe:BLUetooth:SIGN:EUT:INFormation:VERSion?
SENSe:BLUetooth:SIGN:EUT:INFormation:COMPany?
SENSe:BLUetooth:SIGN:EUT:INFormation:BDADdress?
SENSe:BLUetooth:SIGN:EUT:INFormation:CLASs?
// *****************************************************************************
// Query all EUT capability results
// *****************************************************************************
SENSe:BLUetooth:SIGN:EUT:CAPability:CONNection?
SENSe:BLUetooth:SIGN:EUT:CAPability:ENCRyption?
SENSe:BLUetooth:SIGN:EUT:CAPability:PSAVing?
SENSe:BLUetooth:SIGN:EUT:CAPability:PCONtrol?
SENSe:BLUetooth:SIGN:EUT:CAPability:EPControl?
SENSe:BLUetooth:SIGN:EUT:CAPability:ACL?
SENSe:BLUetooth:SIGN:EUT:CAPability:SCO?
SENSe:BLUetooth:SIGN:EUT:CAPability:ESCO?
SENSe:BLUetooth:SIGN:EUT:CAPability:SCLass?
Top