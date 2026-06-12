# Performing an Rx Measurement

Module: Bluetooth Measurements
Source: 82b5687d2c714eef.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Rx Measurements
 > 
Performing an Rx Measurement
Performing an Rx Measurement
// *****************************************************************************
// Start the measurement and return the contents of the result table.
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:BLUetooth:MEAS:RXQuality
FETCh:BLUetooth:MEAS:RXQuality?
FETCh:BLUetooth:MEAS:RXQuality:STATe?
FETCh:BLUetooth:MEAS:RXQuality:STATe:ALL?
// *****************************************************************************
// Query the PER results: detected EUT device address, PER, 
// number of recieved SCAN_RSP.
// *****************************************************************************
FETCh:BLUetooth:MEAS:RXQuality:ADETected:AADDress?
FETCh:BLUetooth:MEAS:RXQuality:PER?
FETCh:BLUetooth:MEAS:RXQuality:PER:RXPackets?
// *****************************************************************************
// Query the sensitivity search measurement results.
// *****************************************************************************
FETCh:BLUetooth:MEAS:RXQuality:SENSitivity?
// *****************************************************************************
// Query the spot chec results.
// *****************************************************************************
FETCh:BLUetooth:MEAS:RXQuality:SPOTcheck?
Top