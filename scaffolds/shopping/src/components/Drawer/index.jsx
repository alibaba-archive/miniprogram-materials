Component({
  mixins: [],
  data: {},
  props: {
    show: false,
    onClose: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClose() {
      this.props.onClose();
    },
  },
});
