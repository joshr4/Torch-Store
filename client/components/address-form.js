import React from 'react';
import {
  Button,
  Item,
  Grid,
  Icon,
  Label,
  Sticky,
  Header,
  Form,
  Dropdown,
  Select,
  Checkbox,
} from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import stateOptions from './all-states';

export const AddressForm = props => {
  const {
    handleShippingChange,
    handleBillingChange,
    handleShippingDropdownChange,
    handleBillingDropdownChange,
    handleSubmitButtonRef,
    handleOrderSubmit,
    handleCheckboxChange,
    checkBox,
  } = props;
  return (
    <div>
      <Form onSubmit={handleOrderSubmit}>
        <Form.Group>
          <Form.Input
            label="First name"
            onChange={e => handleShippingChange(e, 'firstName')}
            placeholder="First Name"
            width={8}
          />
          <Form.Input
            label="Last Name"
            onChange={e => handleShippingChange(e, 'lastName')}
            placeholder="Last Name"
            width={8}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Address line 1:"
            onChange={e => handleShippingChange(e, 'addressLine1')}
            width={16}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Address line 2:"
            onChange={e => handleShippingChange(e, 'addressLine2')}
            width={16}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="City:"
            onChange={e => handleShippingChange(e, 'city')}
            width={6}
          />
          <Form.Input
            control={Select}
            label="State:"
            options={stateOptions}
            placeholder="State"
            onChange={handleShippingDropdownChange}
            width={8}
          />
          <Form.Input
            label="Zip Code:"
            onChange={e => handleShippingChange(e, 'zipcode')}
            width={2}
          />
        </Form.Group>
        <Form.Group grouped>
          <Checkbox
            defaultChecked
            label="Billing address is same as shipping address."
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        {checkBox ? (
          <div />
        ) : (
          <div>
            <Form.Group>
              <Form.Input
                label="First name"
                onChange={e => handleBillingChange(e, 'firstName')}
                placeholder="First Name"
                width={8}
              />
              <Form.Input
                label="Last Name"
                onChange={e => handleBillingChange(e, 'lastName')}
                placeholder="Last Name"
                width={8}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Address line 1:"
                onChange={e => handleBillingChange(e, 'addressLine1')}
                width={16}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Address line 2:"
                onChange={e => handleBillingChange(e, 'addressLine2')}
                width={16}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="City:"
                onChange={e => handleBillingChange(e, 'city')}
                width={6}
              />
              <Form.Input
                control={Select}
                label="State:"
                options={stateOptions}
                placeholder="State"
                onChange={handleBillingDropdownChange}
                width={8}
              />
              <Form.Input
                label="Zip Code:"
                onChange={e => handleBillingChange(e, 'zipcode')}
                width={2}
              />
            </Form.Group>
          </div>
        )}
        <Form.Group>
          {/* <Button as="button" type="submit" ref={handleSubmitButtonRef}>
            Process Order
          </Button> */}
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddressForm;