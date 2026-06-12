# Setting Up an Audio CS Connection

Module: GSM Signaling
Source: d005b8a43c99455a.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Setting Up an Audio CS Connection
Setting Up an Audio CS Connection
Connect the DUT with the audio connectors provided by the R&S
 
CMW with an installed audio board. In the audio measurements, select the GSM signaling as the master. For the detailed information, refer to the user manual of the audio measurements application.
Switch on the cell signal (see 
"Switching On the Cell Signal and the MS"
).
// ***************************************************************************** 
// // Set date source to speech and set up a mobile terminating connection.
// Query the connection state until it equals CEST (call established).
// ***************************************************************************** 
CONFigure:GSM:SIGN:CONNection:CSWitched:DSOurce SP1
CALL:GSM:SIGN:CSWitched:ACTion CONNect
WHILE FETCh:GSM:SIGN:CSWitched:STATe? <> "CEST"
Top