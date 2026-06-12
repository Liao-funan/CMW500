# Performing Measurements

Module: WCDMA Measurements
Source: dab3b23182b14ab9.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Programming
 > 
Measurements with Standalone Scenario
 > 
Performing Measurements
Performing Measurements
// *****************************************************************************
// Switch on the GPRF generator, start the TPC measurement for primary
// uplink carrier and wait until command processing is complete.
// *****************************************************************************
SOURce:GPRF:GEN:STATe ON
CONFigure:WCDMa:MEAS:TPC:CSELection C1
INIT:WCDMa:MEAS:TPC
*OPC?
// *****************************************************************************
// Query the traces obtained in the measurement.
// *****************************************************************************
FETCh:WCDMa:MEAS:TPC:CARRier:TRACe:UEPower:CURRent?
FETCh:WCDMa:MEAS:TPC:CARRier:TRACe:PSTeps:CURRent?
// *****************************************************************************
// Query the measurement state (should be "RDY").
// *****************************************************************************
FETCh:WCDMa:MEAS:TPC:STATe?
// *****************************************************************************
// Query statistical results obtained in the measurement
// *****************************************************************************
FETCh:WCDMa:MEAS:TPC:CARRier:UEPower:MAXimum?
FETCh:WCDMa:MEAS:TPC:CARRier:UEPower:MINimum?
FETCh:WCDMa:MEAS:TPC:CARRier:UEPower:STATistics?
FETCh:WCDMa:MEAS:TPC:CARRier:PSTeps:MAXimum?
FETCh:WCDMa:MEAS:TPC:CARRier:PSTeps:MINimum?
FETCh:WCDMa:MEAS:TPC:CARRier:PSTeps:STATistics?
FETCh:WCDMa:MEAS:TPC:DHIB:MAXimum?
FETCh:WCDMa:MEAS:TPC:DHIB:MINimum?
FETCh:WCDMa:MEAS:TPC:DHIB:AVERage?
FETCh:WCDMa:MEAS:TPC:DHIB:STATistics?
// *****************************************************************************
// Query limit check results obtained in the measurement
// *****************************************************************************
CALCulate:WCDMa:MEAS:TPC:CARRier:UEPower:MAXimum?
CALCulate:WCDMa:MEAS:TPC:CARRier:UEPower:MINimum?
CALCulate:WCDMa:MEAS:TPC:CARRier:UEPower:AVERage?
CALCulate:WCDMa:MEAS:TPC:CARRier:PSTeps:MAXimum?
CALCulate:WCDMa:MEAS:TPC:CARRier:PSTeps:MINimum?
CALCulate:WCDMa:MEAS:TPC:CARRier:PSTeps:AVERage?
CALCulate:WCDMa:MEAS:TPC:DHIB:MAXimum?
CALCulate:WCDMa:MEAS:TPC:DHIB:MINimum?
CALCulate:WCDMa:MEAS:TPC:DHIB:AVERage?
Top