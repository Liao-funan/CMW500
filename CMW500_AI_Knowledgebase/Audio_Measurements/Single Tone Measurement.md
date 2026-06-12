# Single Tone Measurement

Module: Audio Measurements
Source: 220e5f45924a4496.htm

## 原始指令文档说明
Audio Measurements
 > 
Programming
 > 
Audio Measurement and Generator Scenario
 > 
Single Tone Measurement
Single Tone Measurement
The following example configures all settings specific for a single tone measurement, starts the audio generator, starts the audio measurement and queries the measurement results.
// *****************************************************************************
// Select single tone as signal type and couple the generator to a measurement.
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:STYPe SINGletone
SOURce:AUDio:GEN:ANALog:ACOupling ANAL
// *****************************************************************************
// Configure the single tone frequency and level.
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:SINGletone:FREQuency 10000
SOURce:AUDio:GEN:ANALog:SINGletone:LEVel 3
// *****************************************************************************
// Configure the statistic count of the measurement.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:SINGletone:SCOunt 10
// *****************************************************************************
// Query the used distortion frequency (should be 10000).
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:SINGletone:FILTer:DFRequency?
// *****************************************************************************
// Configure a window function for the spectrum measurement and enable the
// spectrum measurement.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:SINGletone:FILTer:WFUNction BHAR
CONFigure:AUDio:MEAS:ANALog:SPECtrum:DMODe ON
// *****************************************************************************
// Configure the single tone measurement filters.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:SINGletone:FILTer:LPASs OFF
CONFigure:AUDio:MEAS:ANALog:SINGletone:FILTer:HPASs OFF
CONFigure:AUDio:MEAS:ANALog:SINGletone:FILTer:WEIGhting OFF
CONFigure:AUDio:MEAS:ANALog:SINGletone:FILTer:BANDpass 10000, 210
// *****************************************************************************
// Configure measurement limits.
// *****************************************************************************
CONFigure:AUDio:MEAS:ANALog:SINGletone:LIMit 5,OFF,0,OFF,10,ON,10,ON,10,ON
// *****************************************************************************
// Switch on the audio generator. Wait until the command has been executed and
// query the generator state (should be ON). 
// *****************************************************************************
SOURce:AUDio:GEN:ANALog:STATe ON; *OPC?
SOURce:AUDio:GEN:ANALog:STATe?
// *****************************************************************************
// Start the audio measurement.
// Query the average and extreme measurement results from the result table.
// Query the spectrum trace.
// Query the measurement state (should be RDY).
// *****************************************************************************
INITiate:AUDio:MEAS:ANALog
FETCh:AUDio:MEAS:ANALog:SINGletone:AVERage?
FETCh:AUDio:MEAS:ANALog:SINGletone:EXTReme?
FETCh:AUDio:MEAS:ANALog:SPECtrum:CURRent?
FETCh:AUDio:MEAS:ANALog:STATe?
// *****************************************************************************
// Query the related limit check results.
// *****************************************************************************
CALCulate:AUDio:MEAS:ANALog:SINGletone:AVERage?
CALCulate:AUDio:MEAS:ANALog:SINGletone:EXTReme?
Top