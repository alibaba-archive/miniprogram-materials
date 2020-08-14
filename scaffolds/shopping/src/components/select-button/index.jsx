Component({
  mixins: [],
  data: {},
  props: {
    options: [],
    selectedOptionId: "",
    onSelectOption: () => {},
    identifyId: "",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onSelectOption(e) {
      this.props.onSelectOption(e.target.dataset.id, this.props.identifyId);
    },
  },
});
