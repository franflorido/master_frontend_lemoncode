import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/Confirmation-DialogComponent', () => {
    it('should display a Dialog, a button with text "Acept" and a button with text "Close" also the title and children inside de dialog tittle and content', () => {
      // Arrange
      const props = {
        isOpen:true,
        onAccept: () => {},
        onClose: () => {},
        title: "Welcome",
        labels: {
            closeButton: "Close",
            acceptButton: "Acept",
          },
        children: "ChildrenTest",
      };
  
      // Act
      render(<ConfirmationDialogComponent {...props} />);
      const buttonCloseElement = screen.getByRole('button', {
        name: /Close/i,
      });
  
      const buttonAcceptElement = screen.getByRole('button', {
        name: /Acept/i,
      });
      const dialog = screen.getByRole('dialog');
      const dialogElements = within(dialog);
  
      // Assert
      expect(buttonCloseElement).toBeInTheDocument();
      expect(buttonAcceptElement).toBeInTheDocument();
      expect(dialog).toBeInTheDocument();
      expect(dialogElements.getByText("Welcome")).toBeInTheDocument();
      expect(dialogElements.getByText("ChildrenTest")).toBeInTheDocument();
    });
    it('should call onClose when it clicks on "Close" button', async () => {
      // Arrange
      const props = {
        isOpen:true,
        onAccept: () => {},
        onClose: jest.fn(),
        title: "test",
        labels: {
            closeButton: "Close",
            acceptButton: "Acept",
          },
        children: "test",
      };
  
      // Act
      render(<ConfirmationDialogComponent {...props} />);
  
      const buttonElement = screen.getByRole('button', {
        name: /Close/i,
      });
      await userEvent.click(buttonElement);
  
      // Assert
      expect(props.onClose).toHaveBeenCalled();
    });
    it('should call onAccept when it clicks on "Close" button', async () => {
        // Arrange
        const props = {
          isOpen:true,
          onAccept: jest.fn(),
          onClose: () => {},
          title: "test",
          labels: {
              closeButton: "Close",
              acceptButton: "Acept",
            },
          children: "test",
        };
    
        // Act
        render(<ConfirmationDialogComponent {...props} />);
    
        const buttonElement = screen.getByRole('button', {
          name: /Acept/i,
        });
        await userEvent.click(buttonElement);
    
        // Assert
        expect(props.onAccept).toHaveBeenCalled();
      });
  });
  