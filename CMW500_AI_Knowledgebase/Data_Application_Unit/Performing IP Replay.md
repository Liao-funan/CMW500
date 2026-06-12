# Performing IP Replay

Module: Data Application Unit
Source: 67f65245fffe499e.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing IP Replay
Performing IP Replay
// *****************************************************************************
// Query a list of all available files.
// Add two of the files to the playlist.
// *****************************************************************************
FETCh:DATA:MEAS:IPReplay:FILelist?
CONFigure:DATA:MEAS:IPReplay:CREatelist 'myfile.pcap',3,MULTicast
CONFigure:DATA:MEAS:IPReplay:CREatelist 'file42.pcap',1,MULTicast
// *****************************************************************************
// Start the IP replay application and wait until it is running.
// *****************************************************************************
INIT:DATA:MEAS:IPReplay
WHILE FETCh:DATA:MEAS:IPReplay:STATe? <> 'RUN'
// *****************************************************************************
// Trigger analysis of the files. Use a loop to query the results
// repeatedly until the analysis is finished and the results are available.
// *****************************************************************************
WHILE SENSe:DATA:MEAS:IPReplay:INFofile? 'myfile.pcap' = INV,INV,INV,INV,INV,INV
WHILE SENSe:DATA:MEAS:IPReplay:INFofile? 'file42.pcap' = INV,INV,INV,INV,INV,INV
// *****************************************************************************
// Query information about the IP connections in the files.
// *****************************************************************************
SENSe:DATA:MEAS:IPReplay:TRAFficfile? 'myfile.pcap'
SENSe:DATA:MEAS:IPReplay:TRAFficfile? 'file42.pcap'
// *****************************************************************************
// Start playlist execution.
// Continue until the user closes a dialog box. Query the playlist progress.
// *****************************************************************************
CONFigure:DATA:MEAS:IPReplay:PLAYall
WAITKEY >Check the progress?<
SENSe:DATA:MEAS:IPReplay:PROGress?
// *****************************************************************************
// Stop the playlist. Modify the number of iterations for one file and the
// interface for the other file. Play the playlist again.
// *****************************************************************************
CONFigure:DATA:MEAS:IPReplay:STOPall
CONFigure:DATA:MEAS:IPReplay:ITERation 'file42.pcap',4
CONFigure:DATA:MEAS:IPReplay:INTerface 'myfile.pcap',IP
CONFigure:DATA:MEAS:IPReplay:PLAYall
// *****************************************************************************
// Switch off the IP replay application and clear the list.
// *****************************************************************************
ABORt:DATA:MEAS:IPReplay
CONFigure:DATA:MEAS:IPReplay:REMovelist
Top