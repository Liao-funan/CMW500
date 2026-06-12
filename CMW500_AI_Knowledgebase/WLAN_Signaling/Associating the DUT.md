# Associating the DUT

Module: WLAN Signaling
Source: a7261f93059f4794.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Associating the DUT
Associating the DUT
// *****************************************************************************
// Connect the DUT (switched off). Switch on the signaling application. Query the  
// state until it equals ON,ADJ (signal available at RF output connector).
// *****************************************************************************
WAITKEY >Ensure that the DUT is connected to the instrument and switched off<
SOURce:WLAN:SIGN:STATe ON
WHILE SOURce:WLAN:SIGN:STATe:ALL? <> "ON,ADJ"
// *****************************************************************************
// Switch on the DUT.
// *****************************************************************************
WAITKEY >Switch on the DUT<
// *****************************************************************************
// Start WPS authentication. Wait until the DUT is associated.
// *****************************************************************************
CALL:WLAN:SIGN:ACTion:WPS:SCONnection
WHILE FETCh:WLAN:SIGN:PSWitched:STATe? <> "ASS"
Top